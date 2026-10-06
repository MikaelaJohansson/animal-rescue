import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addDoc, collection, doc, onSnapshot, serverTimestamp } from "firebase/firestore";
import { LuCheck } from "react-icons/lu";
import { db } from "../../firebase";

import styles from "./AdoptionApplication.module.css";
import adoptionCompleteBackground from "../../assets/adoptionCompleteBackground.png";
import ApplicationSteps from "./ApplicationSteps/ApplicationSteps";
import AboutYouStep from "./AboutYouStep/AboutYouStep";
import YourHomeStep from "./YourHomeStep/YourHomeStep";
import ExperienceStep from "./ExperienceStep/ExperienceStep";
import ConfirmStep from "./ConfirmStep/ConfirmStep";


export default function AdoptionApplication() {

    /* Gets the selected dog id from the URL */
    const { dogId } = useParams();

    /* Stores the selected dog and loading state */
    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Stores the current application step */
    const [currentStep, setCurrentStep] = useState(1);

    /* Stores the submission state */
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    /* Stores all information entered in the application */
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        housingType: "",
        hasGarden: false,
        householdMembers: "",
        workSituation: "",
        hasOtherPets: false,
        experience: "",
        notes: "",
        informationCorrect: false
    });
    

    /* Gets the selected dog from Firestore and listens for changes */
    useEffect(() => {

        const docRef = doc(db, "animals", dogId);

        const unsubscribe = onSnapshot(
            docRef,

            (docSnapshot) => {

                if (docSnapshot.exists()) {

                    setAnimal({
                        id: docSnapshot.id,
                        ...docSnapshot.data()
                    });

                } else {

                    setAnimal(null);

                }

                setLoading(false);
            },

            (error) => {

                console.error("Error loading dog:", error);
                setLoading(false);

            }
        );

        return () => { unsubscribe(); };

    }, [dogId]);


    /* Updates the correct form value when an input changes */
    function handleChange(event) {

        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    }

    /* Moves to the next application step */
    function nextStep() {

        if (currentStep < 4) {  setCurrentStep(currentStep + 1); }

    }

    /* Moves back to the previous application step */
    function previousStep() {

        if (currentStep > 1) { setCurrentStep(currentStep - 1); }

    }


    /* Creates the adoption application and admin notification */
    async function handleSubmit(event) {

        event.preventDefault();

        if (!animal || !formData.informationCorrect) {
            return;
        }

        if (animal.status !== "Available") {

            console.error(
                "The adoption application cannot be submitted because the dog is no longer available."
            );

            return;
        }

        const adminUserId = import.meta.env.VITE_ADMIN_USER_ID;

        if (!adminUserId) {

            console.error(
                "VITE_ADMIN_USER_ID is missing from the .env file."
            );

            return;
        }

        setIsSubmitting(true);

        try {

            const applicantName = `${formData.firstName} ${formData.lastName}`.trim();

            /* Create adoption application */
            const applicationDocumentReference = await addDoc(
                collection(db, "adoptionApplications"),
                {
                    animalId: animal.id,
                    animalImage: animal.image,
                    animalName: animal.name,
                    applicantName: applicantName,
                    email: formData.email,
                    phone: formData.phone,
                    experience: formData.experience,
                    hasGarden: formData.hasGarden,
                    hasOtherPets: formData.hasOtherPets,
                    householdMembers: formData.householdMembers,
                    housingType: formData.housingType,
                    notes: formData.notes,
                    workSituation: formData.workSituation,
                    status: "New",
                    dateApplied: serverTimestamp()
                }
            );

            /* Create notification for Administrator */
            await addDoc(
                collection(db, "notifications"),
                {
                    applicationId: applicationDocumentReference.id,
                    animalId: animal.id,
                    createdAt: serverTimestamp(),
                    isRead: false,
                    message: `${applicantName} has submitted an adoption application for ${animal.name}.`,
                    title: "New adoption application",
                    type: "new_adoption_application",
                    userId: adminUserId
                }
            );

            setIsSubmitted(true);

        } catch (error) {

            console.error(
                "Error submitting adoption application:",
                error
            );

        } finally {

            setIsSubmitting(false);

        }

    }


    /* Shows loading state while the dog is being loaded */
    if (loading) {

        return (
            <div className={styles.MessageContainer}>
                <p>Loading application...</p>
            </div>
        );

    }


    /* Shows a message if the dog does not exist */
    if (!animal) {

        return (
            <div className={styles.MessageContainer}>

                <h1>Dog not found</h1>

                <Link to="/dogs">
                    Back to Our Dogs
                </Link>

            </div>
        );

    }


    /* Stops applications when the dog is no longer available */
    if (animal.status !== "Available" && !isSubmitted) {

        return (
            <div className={styles.MessageContainer}>

                <h1>
                    {animal.name} is not available for adoption
                </h1>

                <p>
                    This dog is currently not accepting adoption applications.
                </p>

                <Link to="/dogs">
                    Back to Our Dogs
                </Link>

            </div>
        );

    }


    /* Shows the completed application page */
    if (isSubmitted) {

        return (
            <div
                className={styles.CompleteContainer}
                style={{
                    backgroundImage: `url(${adoptionCompleteBackground})`
                }}
            >

                <div className={styles.CompleteContent}>

                    <div className={styles.CompleteIcon}>
                        <LuCheck />
                    </div>

                    <h1>
                        Thank you for your application!
                    </h1>

                    <p>
                        We have received your application and
                        will get back to you as soon as we have
                        reviewed it.
                    </p>

                    <p>
                        A confirmation has been registered for{" "}
                        <strong>{formData.email}</strong>.
                    </p>

                    <Link
                        to="/"
                        className={styles.PrimaryButton}
                    >
                        Back to Home
                    </Link>

                </div>

            </div>
        );

    }


    return (
        <div className={styles.MainContainerAdoptionApplication}>

            {/* Application progress */}
            <ApplicationSteps currentStep={currentStep} />


            {/* Step 1 - About You */}
            {currentStep === 1 && (

                <AboutYouStep
                    animal={animal}
                    formData={formData}
                    handleChange={handleChange}
                    nextStep={nextStep}
                />

            )}


            {/* Step 2 - Your Home */}
            {currentStep === 2 && (

                <YourHomeStep
                    formData={formData}
                    handleChange={handleChange}
                    previousStep={previousStep}
                    nextStep={nextStep}
                />

            )}


            {/* Step 3 - Experience */}
            {currentStep === 3 && (

                <ExperienceStep
                    formData={formData}
                    handleChange={handleChange}
                    previousStep={previousStep}
                    nextStep={nextStep}
                />

            )}


            {/* Step 4 - Confirm */}
            {currentStep === 4 && (

                <ConfirmStep
                    formData={formData}
                    handleChange={handleChange}
                    previousStep={previousStep}
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                />

            )}

        </div>
    );
}