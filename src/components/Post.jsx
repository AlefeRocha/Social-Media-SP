import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https.//github/AlefeRocha.png"
                    />
                    <div className={styles.autohrInfo}>
                        <strong>Alefe Rocha</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time dateTime="">04 Apr 2021</time>
            </header>
        </article>
    )
}