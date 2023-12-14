import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://github.com/AlefeRocha.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Alefe Rocha</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time title= "21 de Outubro às 11h27" dateTime="2023-10-21 11:27:31">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Eae pessoal!! 🔥</p>
                <p>Acabei de criar um projeto e já estou compartilhando com vocês. 🚀<br />
                Se quiserem ver, é só entrar no meu github e ver o repositório: <a href="https://github.com/AlefeRocha">github.com/AlefeRocha</a></p>
                <p><a href="#">#confereLa</a>{' '}<a href="#">#loveProgramming</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Write your comment</strong>

                <textarea
                    placeholder='Write your comment'
                />

                <footer>
                    <button type="submit">Comment</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}