import React from "react";
import styles from "./Header.module.css";
import globalResumeStyles from "../../styles/Resume.module.css";


const Header: React.FC = () => {
    return (
        <div className={`${styles.wrapper} ${globalResumeStyles.section}`}>
            <div className={styles.name}>Kevin Chou</div>
            <div className={styles.contactInfo}>
                <div className="address">
                    500 W 110th St, New York, NY
                </div>
                <div className={`${styles.row}`}>
                    <span>
                        (925) 922-1851
                    </span>
                    <span>
                        <a href="mailto:kchou0907@gmail.com">kchou0907@gmail.com</a>
                    </span>
                </div>

                <div className={`${styles.row}`}>
                    <span>
                        LinkedIn: <a href="https://www.linkedin.com/in/kchou0907">www.linkedin.com/in/kchou0907</a>
                    </span>
                    <span>
                        GitHub: <a href="https://www.github.com/kchou0907">www.github.com/kchou0907</a>
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Header