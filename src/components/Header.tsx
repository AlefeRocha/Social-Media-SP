import styles from "./Header.module.css";
import devLogo from "../assets/dev-socialmedia-logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={devLogo} alt="Logo of Dev Social Media"/>
            {/* <strong>Dev Social Media</strong> */}
        </header>
    )
}