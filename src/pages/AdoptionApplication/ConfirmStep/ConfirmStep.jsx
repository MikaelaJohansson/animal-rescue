import { LuArrowLeft } from "react-icons/lu";
import styles from "../AdoptionApplication.module.css";

export default function ConfirmStep({
    formData,
    handleChange,
    previousStep,
    handleSubmit,
    isSubmitting
}) {

    return (
        <form
            className={styles.FormStep}
            onSubmit={handleSubmit}
        >

            {/* Step heading */}
            <div className={styles.StepHeading}>

                <h1>Confirm Your Application</h1>

                <p>
                    Check that your information is correct
                    before submitting.
                </p>

            </div>


            {/* Personal information */}
            <div className={styles.ConfirmSection}>

                <h3>About You</h3>

                <p>
                    {formData.firstName} {formData.lastName}
                </p>

                <p>{formData.email}</p>

                <p>{formData.phone}</p>

            </div>


            {/* Home information */}
            <div className={styles.ConfirmSection}>

                <h3>Your Home</h3>

                <p>Housing: {formData.housingType}</p>

                <p>Household: {formData.householdMembers}</p>

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


            {/* Experience information */}
            <div className={styles.ConfirmSection}>

                <h3>Experience</h3>

                <p>{formData.experience}</p>

            </div>


            {/* Additional information */}
            {formData.notes && (

                <div className={styles.ConfirmSection}>

                    <h3>Additional Information</h3>

                    <p>{formData.notes}</p>

                </div>

            )}


            {/* Confirmation checkbox */}
            <label className={styles.CheckboxLabel}>

                <input
                    type="checkbox"
                    name="informationCorrect"
                    checked={formData.informationCorrect}
                    onChange={handleChange}
                />

                I confirm that all information is correct.

            </label>


            {/* Step buttons */}
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
    );
}