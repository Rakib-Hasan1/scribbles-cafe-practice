import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [reading, setReading] = useState(0);
  

  const handleBookmark = (blog) => {
    setBookmarked([...bookmarked, blog]);
  }




  const handleMarkAsRead = (time, id) => {
    const newTime = reading + time;
    setReading(newTime);
    handleRemoveMarked(id)
  }


  const handleRemoveMarked = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(remainingBookmark);
  }


  return (
    <>
     <Navbar></Navbar>
     

     <div className="main-container flex text-center gap-4">
      <div className="left-container w-[70%]">
        <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
      <div className="right-container w-[30%] my-5 border border-amber-600 rounded-xl">
        <h1 className='bg-indigo-400 rounded-xl m-3 py-4 font-semibold text-2xl'>Reading time : {reading}</h1>
        <h1 className='bg-indigo-400 rounded-xl m-3 py-4 font-semibold text-2xl'>Bookmarked Count : {bookmarked.length}</h1>
        {
          bookmarked.map((marked) => <p key={marked.id} className='bg-neutral-500 rounded-xl m-3 py-4 font-semibold text-2xl text-white'>{marked.title}</p>)
        }
        </div>
     </div>
    </>
  )
}

export default App
