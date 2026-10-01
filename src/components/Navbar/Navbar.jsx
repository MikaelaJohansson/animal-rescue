import styles from './Navbar.module.css'
import animalRescueLogoBlack from "../../assets/animalRescueLogoBlack.png"
import {Link} from "react-router-dom"

export default function Navbar() {


  return (

    <div className={styles.mainContainerNavbar}>
        
        <div>
            <img className={styles.mainContainerNavbarLogo} src={animalRescueLogoBlack} alt="Logo"/>
        </div>

        <div className={styles.mainContainerNavbarLinks}>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                 <li>
                    <Link to="/dogs">Our dogs</Link>
                </li>
                 <li>
                    <Link to="/contact">Contact</Link>
                </li>
                 <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

        </div>

        <div className={styles.mainContainerNavbarButton}>
            <Link to="/dogs">See Dogs for Adoption</Link>
        </div>

    </div>

  )
}
