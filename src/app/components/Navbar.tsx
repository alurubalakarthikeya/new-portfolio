import styles from "../styles/navbar.module.css"
export default function NavBar(){
    return(
        <div className={styles.navBar}>
            <ul className={styles.items}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}