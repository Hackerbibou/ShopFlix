import React, {useState, useEffect} from 'react'
import {getSearchResult} from '../../utilities/movies-api'
import {motion} from 'framer-motion'
import './Search.css'
export default function Search() {
    const [movies, setMovies]= useState([])
    const [input,setInput]=useState('a')
    useEffect(()=>{
        async function getMo(){
            const movis = await getSearchResult(input)
            setMovies(movis.results)
        }
        getMo()
    },[input])
    function handleChange(e){
        e.preventDefault()
        if(e.target.value===''){setInput('a')}
        else{setInput(e.target.value)}
        
    }
    console.log(movies)
  return (
    <div>
        <h1>Search</h1>
        
        <div className='SearchWrapper'>
            <input type='text' name='input' className='searchInput' onChange={handleChange} placeholder='Search movies'/>
            
            <div className='imageDiv'>

            {movies===[]?<>No movies</>:
            movies.map((elem,i)=>{
                return elem.backdrop_path && <motion.div
                transition={{delay:0.2*(i+3)}}
                initial={{opacity:0,delay:0.1*i}}
                animate={{opacity:1,delay:0.1*i}}
                exit={{opacity:0,delay:0.1*i}}  className='movie1' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${elem.backdrop_path}")`}}/>
            })
            }
            </div>
            </div>
    </div>
  )
}