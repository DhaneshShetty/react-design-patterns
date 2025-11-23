import './App.css'
import Post from './components/Post'

function App() {

  return (
    <>
      <Post data={{
        id: 1,
        title: "My First Post",
        content: "This is the content of my first post.",
        comments: [
          {id: 1, text: "Great post!", status: 'posted'},
          {id: 2, text: "Thanks for sharing.", status: 'posted'}
        ]
      }}/>
    </>
  )
}

export default App
