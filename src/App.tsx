import { Post, PostType } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

// author: { avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/AlefeRocha.png',
      name: 'Alefe Rocha',
      role: 'Fullstack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Eae pessoal!! 🔥' },
      { type: 'paragraph', content: 'Acabei de criar um projeto e já estou compartilhando com vocês. 🚀' },
      { type: 'paragraph', content: 'Se quiserem ver, é só entrar no meu github e ver o repositório:' },
      { type: 'link', content: 'github.com/AlefeRocha', authorLink: 'https://github.com/AlefeRocha'}
    ],
    publishedAt: new Date('2023-11-21 21:17:24'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1536164261511-3a17e671d380?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Daniel Peixoto',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala ai pessoal!' },
      { type: 'paragraph', content: 'Como estão os estudos por ai? Estou aprendendo bastante na trilha de react em, recomendo demais! 🚀' }
    ],
    publishedAt: new Date('2023-11-21 21:17:24'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })} 
        </main>
      </div>
    </div>
  )
}
