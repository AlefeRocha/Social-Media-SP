import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author= "Alefe Rocha"
        content= "Testing the react by Rocketseat"
      />
    </div>
  )
}
