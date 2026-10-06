import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import styles from "../AdoptionApplication.module.css";

export default function ExperienceStep({
    formData,
    handleChange,
    previousStep,
    nextStep
}) {

    return (
        <div className={styles.FormStep}>

            {/* Step heading */}
            <div className={styles.StepHeading}>

                <h1>Your Experience with Dogs</h1>

                <p>
                    Tell us about your experience and
                    expectations.
                </p>

            </div>


            {/* Dog experience */}
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
                    type="button"
                    className={styles.PrimaryButton}
                    onClick={nextStep}
                >
                    Next
                    <LuArrowRight />
                </button>

            </div>

        </div>
    );
}