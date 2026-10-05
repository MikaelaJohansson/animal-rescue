import styles from "./AdoptionApplication.module.css";

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    serverTimestamp
} from "firebase/firestore";

import { db } from "../../firebase";

import animalImages from "../../Data/animalImages";

import adoptionCompleteBackground from "../../assets/adoptionCompleteBackground.png";

import { LuCheck, LuArrowLeft, LuArrowRight } from "react-icons/lu";


export default function AdoptionApplication() {

    const { dogId } = useParams();

    const [animal, setAnimal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

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


        return () => {
            unsubscribe();
        };

    }, [dogId]);


    function handleChange(event) {

        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });

    }


    function nextStep() {

        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }

    }


    function previousStep() {

        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }

    }


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

            const applicantName =
                `${formData.firstName} ${formData.lastName}`.trim();


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

                    message:
                        `${applicantName} has submitted an adoption application for ${animal.name}.`,

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


    if (loading) {

        return (
            <div className={styles.MessageContainer}>
                <p>Loading application...</p>
            </div>
        );

    }


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


    if (isSubmitted) {

        return (

            <div
                className={styles.CompleteContainer}
                style={{
                    backgroundImage:
                        `url(${adoptionCompleteBackground})`
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


            <div className={styles.StepContainer}>

                <div className={styles.Step}>

                    <div
                        className={
                            currentStep >= 1
                                ? styles.ActiveStepNumber
                                : styles.StepNumber
                        }
                    >
                        {currentStep > 1 ? <LuCheck /> : "1"}
                    </div>

                    <span>About You</span>

                </div>


                <div
                    className={
                        currentStep > 1
                            ? styles.ActiveStepLine
                            : styles.StepLine
                    }
                />


                <div className={styles.Step}>

                    <div
                        className={
                            currentStep >= 2
                                ? styles.ActiveStepNumber
                                : styles.StepNumber
                        }
                    >
                        {currentStep > 2 ? <LuCheck /> : "2"}
                    </div>

                    <span>Your Home</span>

                </div>


                <div
                    className={
                        currentStep > 2
                            ? styles.ActiveStepLine
                            : styles.StepLine
                    }
                />


                <div className={styles.Step}>

                    <div
                        className={
                            currentStep >= 3
                                ? styles.ActiveStepNumber
                                : styles.StepNumber
                        }
                    >
                        {currentStep > 3 ? <LuCheck /> : "3"}
                    </div>

                    <span>Experience</span>

                </div>


                <div
                    className={
                        currentStep > 3
                            ? styles.ActiveStepLine
                            : styles.StepLine
                    }
                />


                <div className={styles.Step}>

                    <div
                        className={
                            currentStep >= 4
                                ? styles.ActiveStepNumber
                                : styles.StepNumber
                        }
                    >
                        4
                    </div>

                    <span>Confirm</span>

                </div>

            </div>


            {currentStep === 1 && (

                <div className={styles.FormStep}>

                    <div className={styles.StepHeading}>

                        <h1>Adoption Application</h1>

                        <p>
                            Tell us about yourself, your home and
                            your experience with dogs. We use the
                            information to find the right match.
                        </p>

                    </div>


                    <div className={styles.SelectedDog}>

                        <span>Dog you are applying for</span>

                        <div className={styles.SelectedDogContent}>

                            <img
                                src={animalImages[animal.image]}
                                alt={animal.name}
                            />

                            <strong>
                                {animal.name} – {animal.age} years, {animal.gender}
                            </strong>

                        </div>

                    </div>


                    <h2>Basic Information</h2>


                    <div className={styles.FormGrid}>

                        <label>

                            First Name *

                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />

                        </label>


                        <label>

                            Last Name *

                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />

                        </label>


                        <label>

                            Email *

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </label>


                        <label>

                            Phone *

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                        </label>

                    </div>


                    <div className={styles.StepButtons}>

                        <Link
                            to={`/dogs/${animal.id}`}
                            className={styles.SecondaryButton}
                        >
                            Cancel
                        </Link>

                        <button
                            type="button"
                            className={styles.PrimaryButton}
                            onClick={nextStep}
                        >
                            Next
                            <LuArrowRight />
                        </button>

                    </div>

                </div>

            )}


            {currentStep === 2 && (

                <div className={styles.FormStep}>

                    <div className={styles.StepHeading}>

                        <h1>Your Home</h1>

                        <p>
                            Tell us about your home and your
                            living situation.
                        </p>

                    </div>


                    <div className={styles.FormGrid}>

                        <div>

                            <label>

                                Housing Type *

                                <select
                                    name="housingType"
                                    value={formData.housingType}
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select housing
                                    </option>

                                    <option value="Apartment">
                                        Apartment
                                    </option>

                                    <option value="House">
                                        House
                                    </option>

                                    <option value="Other">
                                        Other
                                    </option>

                                </select>

                            </label>


                            <label className={styles.CheckboxLabel}>

                                <input
                                    type="checkbox"
                                    name="hasGarden"
                                    checked={formData.hasGarden}
                                    onChange={handleChange}
                                />

                                I have access to a garden

                            </label>


                            <label>

                                Household Members *

                                <input
                                    type="text"
                                    name="householdMembers"
                                    placeholder="Example: 2 adults"
                                    value={formData.householdMembers}
                                    onChange={handleChange}
                                />

                            </label>


                            <label className={styles.CheckboxLabel}>

                                <input
                                    type="checkbox"
                                    name="hasOtherPets"
                                    checked={formData.hasOtherPets}
                                    onChange={handleChange}
                                />

                                I have other pets

                            </label>

                        </div>


                        <div>

                            <label>

                                Describe your work situation *

                                <textarea
                                    name="workSituation"
                                    placeholder="Write here..."
                                    value={formData.workSituation}
                                    onChange={handleChange}
                                    rows="5"
                                />

                            </label>


                            <label>

                                Tell us about your home

                                <textarea
                                    name="notes"
                                    placeholder="Write here..."
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="5"
                                />

                            </label>

                        </div>

                    </div>


                    <div className={styles.StepButtons}>

                        <button
                            type="button"
                            className={styles.SecondaryButton}
                            onClick={previousStep}
                        >
                            <LuArrowLeft />
                            Back
                        </button>

                        <button
                            type="button"
                            className={styles.PrimaryButton}
                            onClick={nextStep}
                        >
                            Next
                            <LuArrowRight />
                        </button>

                    </div>

                </div>

            )}


            {currentStep === 3 && (

                <div className={styles.FormStep}>

                    <div className={styles.StepHeading}>

                        <h1>Your Experience with Dogs</h1>

                        <p>
                            Tell us about your experience and
                            expectations.
                        </p>

                    </div>


                    <label>

                        Tell us about your experience with dogs *

                        <textarea
                            name="experience"
                            placeholder="Write here..."
                            value={formData.experience}
                            onChange={handleChange}
                            rows="7"
                        />

                    </label>


                    <div className={styles.StepButtons}>

                        <button
                            type="button"
                            className={styles.SecondaryButton}
                            onClick={previousStep}
                        >
                            <LuArrowLeft />
                            Back
                        </button>

                        <button
                            type="button"
                            className={styles.PrimaryButton}
                            onClick={nextStep}
                        >
                            Next
                            <LuArrowRight />
                        </button>

                    </div>

                </div>

            )}


            {currentStep === 4 && (

                <form
                    className={styles.FormStep}
                    onSubmit={handleSubmit}
                >

                    <div className={styles.StepHeading}>

                        <h1>Confirm Your Application</h1>

                        <p>
                            Check that your information is correct
                            before submitting.
                        </p>

                    </div>


                    <div className={styles.ConfirmSection}>

                        <h3>About You</h3>

                        <p>
                            {formData.firstName} {formData.lastName}
                        </p>

                        <p>{formData.email}</p>

                        <p>{formData.phone}</p>

                    </div>


                    <div className={styles.ConfirmSection}>

                        <h3>Your Home</h3>

                        <p>
                            Housing: {formData.housingType}
                        </p>

                        <p>
                            Household: {formData.householdMembers}
                        </p>

                        <p>
                            Garden: {formData.hasGarden ? "Yes" : "No"}
                        </p>

                        <p>
                            Other pets: {formData.hasOtherPets ? "Yes" : "No"}
                        </p>

                        <p>
                            Work situation: {formData.workSituation}
                        </p>

                    </div>


                    <div className={styles.ConfirmSection}>

                        <h3>Experience</h3>

                        <p>{formData.experience}</p>

                    </div>


                    {formData.notes && (

                        <div className={styles.ConfirmSection}>

                            <h3>Additional Information</h3>

                            <p>{formData.notes}</p>

                        </div>

                    )}


                    <label className={styles.CheckboxLabel}>

                        <input
                            type="checkbox"
                            name="informationCorrect"
                            checked={formData.informationCorrect}
                            onChange={handleChange}
                        />

                        I confirm that all information is correct.

                    </label>


                    <div className={styles.StepButtons}>

                        <button
                            type="button"
                            className={styles.SecondaryButton}
                            onClick={previousStep}
                        >
                            <LuArrowLeft />
                            Back
                        </button>


                        <button
                            type="submit"
                            className={styles.PrimaryButton}
                            disabled={
                                !formData.informationCorrect ||
                                isSubmitting
                            }
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Submit Application"
                            }
                        </button>

                    </div>

                </form>

            )}

        </div>

    );

}