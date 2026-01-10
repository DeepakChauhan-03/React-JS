import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div>
     <div className='flex gap-10'>
       <button onClick={ async()=> {
        const data = await fetchPhotos('car');
        console.log(data.results);
      }}>get Photos</button>
       <button onClick={ async()=> {
        const data = await fetchVideos('car');
        console.log(data);
      }}>get Videos</button>
     </div>
    </div>
  )
}

export default App
