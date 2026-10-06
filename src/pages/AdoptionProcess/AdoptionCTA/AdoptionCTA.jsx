import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import styles from "./AdoptionCTA.module.css";

export default function AdoptionCTA() {

    return (
        <section className={styles.adoptionCTA}>

            {/* Call to action content */}
            <FaHeart />

            <h2>
                Ready to Meet Your New Best Friend?
            </h2>

            <p>
                Take a look at the dogs currently waiting for a home.
            </p>

            <Link to="/dogs">
                See Dogs for Adoption
            </Link>

        </section>
    );
}