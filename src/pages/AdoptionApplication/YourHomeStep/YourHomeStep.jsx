import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import styles from "../AdoptionApplication.module.css";

export default function YourHomeStep({
    formData,
    handleChange,
    previousStep,
    nextStep
}) {

    return (
        <div className={styles.FormStep}>

            {/* Step heading */}
            <div className={styles.StepHeading}>

                <h1>Your Home</h1>

                <p>
                    Tell us about your home and your
                    living situation.
                </p>

            </div>


            {/* Home information */}
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