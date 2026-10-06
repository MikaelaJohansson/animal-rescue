import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import animalImages from "../../../Data/animalImages";
import styles from "../AdoptionApplication.module.css";

export default function AboutYouStep({
    animal,
    formData,
    handleChange,
    nextStep
}) {

    return (
        <div className={styles.FormStep}>

            {/* Step heading */}
            <div className={styles.StepHeading}>

                <h1>Adoption Application</h1>

                <p>
                    Tell us about yourself, your home and
                    your experience with dogs. We use the
                    information to find the right match.
                </p>

            </div>


            {/* Selected dog */}
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


            {/* Basic information */}
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


            {/* Step buttons */}
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
    );
}