import styles from "./PartnerOrganizations.module.css"
import hundarUtanHem from "../../../assets/HomeImg/hundarUtanHem.png"
import wwf from "../../../assets/HomeImg/wwf.png"
import hundstallet from "../../../assets/HomeImg/hundstallet.png"


export default function PartnerOrganizations() {


  return (

    <div className={styles.mainContainerPartnerOrganizations}>

        <div className={styles.containerPartnerOrganizationsTop}>

            <div className={styles.containerPartnerOrganizationsText}>

                <h3>OTHER ORGANISATIONS</h3>

                <h1>Helping Dogs Beyond Our Shelter</h1>

                <p>
                    Animal welfare is a shared effort.
                    <br />
                    Discover and support organisations doing important work for dogs and animals.
                </p>

            </div>

        </div>


        <div className={styles.containerPartnerOrganizationsOrg}>


            <div className={styles.containerPartnerOrganizationsBox}>

             <img src={hundarUtanHem} alt="Hundar Utan Hem" />

                <div className={styles.containerPartnerOrganizationsLink}>

                    <h3>Hundar Utan Hem</h3>

                    <p>
                        Works for homeless dogs and supports shelters in Sweden and abroad.
                    </p>

                    <a
                        href="https://hundarutanhem.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hundar Utan Hem ↗
                    </a>

                </div>

            </div>


            <div className={styles.containerPartnerOrganizationsBox}>

                <img src={wwf} alt="WWF" />

                <div className={styles.containerPartnerOrganizationsLink}>

                    <h3>WWF</h3>

                    <p>
                      Protects animals and nature for a brighter future.
                    </p>

                    <a
                        href="https://www.wwf.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WWF ↗
                    </a>

                </div>

            </div>


            <div className={styles.containerPartnerOrganizationsBox}>

                <img src={hundstallet}  alt="Hundstallet" />

                <div className={styles.containerPartnerOrganizationsLink}>

                    <h3>Hundstallet</h3>

                    <p>
                     Rescues and rehomes dogs in need across Sweden.
                    </p>

                    <a
                        href="https://hundstallet.se/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Hundstallet ↗
                    </a>

                </div>

            </div>


        </div>

    </div>
  )
}