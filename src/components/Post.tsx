import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Post.module.css';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
  authorLink?: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    'Top demais!!'
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'às' HH:MM'h'", {
    locale: ptBR,
  })

  const publishedDateRelative = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Comment cannot be empty')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>

      <header className={styles.headerPost}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
        {
          publishedDateRelative
        }</time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if(line.type === 'paragraph') { 
            return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href={line.authorLink}>{line.content}</a></p>
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Write your comment</strong>

        <textarea 
          name='comment'
          placeholder='Write your comment'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>

    </article>
  )
}