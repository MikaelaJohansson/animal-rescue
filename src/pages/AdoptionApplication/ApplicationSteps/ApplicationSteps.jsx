import { LuCheck } from "react-icons/lu";
import styles from "./ApplicationSteps.module.css";

export default function ApplicationSteps({ currentStep }) {

    return (
        <div className={styles.applicationSteps}>

            {/* Step 1 - About You */}
            <div className={styles.applicationStep}>

                <div
                    className={
                        currentStep >= 1
                            ? styles.activeStepNumber
                            : styles.stepNumber
                    }
                >
                    {currentStep > 1 ? <LuCheck /> : "1"}
                </div>

                <span>About You</span>

            </div>


            {/* Line between step 1 and step 2 */}
            <div
                className={
                    currentStep > 1
                        ? styles.activeStepLine
                        : styles.stepLine
                }
            />


            {/* Step 2 - Your Home */}
            <div className={styles.applicationStep}>

                <div
                    className={
                        currentStep >= 2
                            ? styles.activeStepNumber
                            : styles.stepNumber
                    }
                >
                    {currentStep > 2 ? <LuCheck /> : "2"}
                </div>

                <span>Your Home</span>

            </div>


            {/* Line between step 2 and step 3 */}
            <div
                className={
                    currentStep > 2
                        ? styles.activeStepLine
                        : styles.stepLine
                }
            />


            {/* Step 3 - Experience */}
            <div className={styles.applicationStep}>

                <div
                    className={
                        currentStep >= 3
                            ? styles.activeStepNumber
                            : styles.stepNumber
                    }
                >
                    {currentStep > 3 ? <LuCheck /> : "3"}
                </div>

                <span>Experience</span>

            </div>


            {/* Line between step 3 and step 4 */}
            <div
                className={
                    currentStep > 3
                        ? styles.activeStepLine
                        : styles.stepLine
                }
            />


            {/* Step 4 - Confirm */}
            <div className={styles.applicationStep}>

                <div
                    className={
                        currentStep >= 4
                            ? styles.activeStepNumber
                            : styles.stepNumber
                    }
                >
                    4
                </div>

                <span>Confirm</span>

            </div>

        </div>
    );
}