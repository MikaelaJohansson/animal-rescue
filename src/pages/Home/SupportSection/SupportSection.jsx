import {FaHeart, FaHouse, FaUserGroup} from "react-icons/fa6";
import styles from "./SupportSection.module.css";
import dogImageHomePage from "../../../assets/HomeImg/dogImageHomePage.png";
import dogPaw from "../../../assets/HomeImg/dogPaws.png";


export default function SupportSection() {

    return (
        <section className={styles.mainContainerSupport}>

            {/* Decorative paw prints */}
            <img className={styles.pawsTop} src={dogPaw}  alt="Dog paw" />

            <img className={styles.pawsTopLeftTop}src={dogPaw} alt="Dog paw" />

            <img className={styles.pawsRight}  src={dogPaw} alt="Dog paw" />


            <div className={styles.topContent}>

                {/* Dog */}
                <img className={styles.dogImage}  src={dogImageHomePage} alt="Rescue dog" />


                {/* Right content */}
                <div className={styles.supportContent}>

                    <h2>SUPPORT DOGS IN SWEDEN</h2>

                    <h1>How to Make a Difference</h1>

                    <p>
                        There are many ways to support dogs in need
                        and help more animals find loving homes.
                    </p>


                    <div className={styles.containersupportCards}>

                        <div className={styles.supportCards}>

                            <h3> <FaHeart className={styles.icon} /> Donate </h3>

                            <p> Help provide food, medical care and a safe home. </p>

                            <a
                                href="https://hundstallet.se/stod-oss/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Donate via Hundstallet ↗
                            </a>

                        </div>


                        <div className={styles.supportCards}>

                            <h3> <FaHouse className={styles.icon} /> Foster </h3>

                            <p>
                                Give a dog a safe and loving place while they
                                wait for their forever home.
                            </p>

                            <a
                                href="https://hundstallet.se/engagera-dig/jourhem/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Foster family via Hundstallet ↗
                            </a>

                        </div>


                        <div className={styles.supportCards}>

                            <h3> <FaUserGroup className={styles.icon} /> Volunteer </h3>

                            <p>  Your time and skills make a real difference. </p>

                            <a
                                href="https://hundstallet.se/engagera-dig/volontar/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Volunteer via Hundstallet ↗
                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}