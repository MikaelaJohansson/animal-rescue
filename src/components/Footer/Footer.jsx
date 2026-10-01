import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import animalRescueLogoWhite from "../../assets/animalRescueLogoWhite.png";
import DogSketch from "../../assets/DogSketch.png";

export default function Footer() {
  return (
    <footer className={styles.mainContainerFooter}>

      <div className={styles.containerFooter}>

        {/* LOGO / INFORMATION */}
        <div className={styles.footerInfo}>

          <img
            className={styles.footerLogo}
            src={animalRescueLogoWhite}
            alt="Animal Rescue logo"
          />

          <p className={styles.footerDescription}>
            A demonstration project created to showcase frontend development
            skills. Not a real organisation.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className={styles.footerQuickLinks}>

          <h3 className={styles.footerHeading}>
            Quick links
          </h3>

          <ul className={styles.footerList}>

            <li>
              <Link className={styles.footerLink} to="/">Home</Link>
            </li>

            <li>
              <Link className={styles.footerLink} to="/dogs">Our Dogs</Link>
            </li>

            <li>
              <Link className={styles.footerLink} to="/about">About Us</Link>
            </li>

            <li>
              <Link className={styles.footerLink} to="/contact">Contact</Link>
            </li>

          </ul>

        </div>


        {/* PROJECT */}
        <div className={styles.footerProject}>

          <h3 className={styles.footerHeading}>
            Explore this Project
          </h3>

          <ul className={styles.footerList}>

            <li>
              <a
                className={styles.footerLink}
                href="https://github.com/MikaelaJohansson"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                className={styles.footerLink}
                href="https://animal-rescue-admin.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Admin Portal
              </a>
            </li>

          </ul>

        </div>


        {/* DOG SKETCH */}
        <div className={styles.containerFooterDogSketch}>

          <img
            className={styles.footerDogSketch}
            src={DogSketch}
            alt="Every dog deserves a chance"
          />

        </div>

      </div>

    </footer>
  );
}