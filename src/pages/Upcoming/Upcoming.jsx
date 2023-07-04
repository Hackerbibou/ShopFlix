import React, {useState, useEffect} from 'react'
import {getUpcoming} from '../../utilities/movies-api'
import { motion } from 'framer-motion'
import './Upcoming.css'
export default function Upcoming() {
    const [movies, setMovies]= useState([])
    const [d,setD]=useState(0)
   

  const [currentPage, setCurrentPage] = useState(1);
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
    useEffect(() => {
        async function fetchMovies() {
          const movis = await getUpcoming(currentPage);
          setMovies(movis.results);
          setD(1)
        }
        fetchMovies();
      }, [currentPage]);
   
    console.log(movies)
    useEffect(()=>{
            if(movies.length<1 && d===1){
            window.location.reload()
        }
    },[movies,d])
    
  return (
    <div>
        <h1>Upcoming</h1>
        <div className='UpcomingWrapper'>
            
            
            {movies.map((elem,i)=>{
                return <motion.div
                transition={{delay:0.2*(i+3)}}
                initial={{opacity:0,delay:0.1*i}}
                animate={{opacity:1,delay:0.1*i}}
                exit={{opacity:0,delay:0.1*i}} key={i} className='movie1' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`}}/>


            })
            }</div>
             <div className='pagination'>
       <button
          className='paginationBtn'
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </button>
        <span className='currentPage'>{currentPage}</span>
        <button
          className='paginationBtn'
          onClick={handleNextPage}
        //   disabled={indexOfLastMovie >= movies.length}
        >
          Next &gt;
        </button>
      </div>
    </div>
  )
}





