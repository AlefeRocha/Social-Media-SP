import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    1,
    2
  ])

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:MM'h'", {
    locale: ptBR,
  })

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText])
  }

  return (
    <article className={styles.post}>

      <header className={styles.headerPost}>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {
          publishedDateRelative
        }</time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if(line.type === 'paragraph') { 
            return <p key={index}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={index}><a href={line.authorLink}>{line.content}</a></p>
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Write your comment</strong>

        <textarea 
          name='comment'
          placeholder='Write your comment'
        />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return <Comment key={index} content={comment} />
        })}
      </div>

    </article>
  )
}