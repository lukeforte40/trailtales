import { NavLink } from "react-router"
import styles from "../styles/components/nav.module.scss"
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
    // Rotate hamburger and open nav menu
    const handleHamburgerClick = () => {
        if (window.getComputedStyle(document.getElementById('navLinks', null)).display === "none") {
            document.getElementById("navLinks").style.display = "flex";
            document.getElementById("hamburger").style.transform = "rotate(90deg)"
        }
        else{
            document.getElementById("navLinks").style.display = "none";
            document.getElementById("hamburger").style.transform = "rotate(0deg)"
        }
    }

    return(
        <nav>
            <div id={styles.upperNav}>
                <NavLink id={styles.logo} to="/">Trail Tales</NavLink>
                <div id={styles.loginSignupContainer}>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
            </div>
            <div id={styles.lowerNav}>
                <RxHamburgerMenu className={styles.hamburger} id="hamburger" onClick={handleHamburgerClick}/>
                <div className={styles.navLinks} id="navLinks">
                    <NavLink to="/travelJournal">Travel Journal</NavLink>
                </div>
            </div>
        </nav>
    )
}