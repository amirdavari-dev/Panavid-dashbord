import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Media from './pages/media/media.jsx'
import ControlledAccess from './pages/controlledaccess/controlledAccess.jsx'
import Essentials from './pages/essentials/essentials.jsx'
import AllVideo from './pages/videoPlayer/allvideo.jsx'
import NewVideoPlayer from './pages/newvideoplayer/newVideoPlayer.jsx'
import Comments from './pages/comments/comments.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
            <Route index element={<Comments />} />
            <Route path='/media' element={<Media />} />
            <Route path='/controlled-access' element={<ControlledAccess />} />
            <Route path='/essentials' element={<Essentials />} />
            <Route path='/new-video-player' element={<NewVideoPlayer />} />
            <Route path='/all-video' element={<AllVideo />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
