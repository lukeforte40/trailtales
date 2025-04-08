import { NavLink } from "react-router"
import styles from "../styles/components/nav.module.scss"

export default function Nav() {
    return(
        <nav>
            <NavLink className={styles.logo} to="/">Trail Tales</NavLink>

        </nav>
    )
}