import { Navigation } from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { PostsPage } from "./pages/PostsPage";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App;
