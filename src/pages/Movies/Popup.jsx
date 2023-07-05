import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { addList, getList } from '../../utilities/list-api'
import {motion} from 'framer-motion'
export default function PopUp({popUp, setList,list}) {

function handleClick(e){


    async function getMo(){
            const movis = await addList({
                name: popUp.title,
                release_date:popUp.release_date,
                genre: popUp.genre_ids,
                rating: popUp.vote_average,
                description: popUp.overview,
                poster_path: popUp.poster_path,
                backdrop_path: popUp.backdrop_path,
                original_language: popUp.original_language,
                popularity:popUp.popularity
            })
           
            const moo = await getList()
            setList(moo)
       
     }
        getMo()
         
        
   
    
}


  return(
    <div
    
    className='popup' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${popUp.backdrop_path}")`}}> 
     
      <div>
      <div className='movieTitle'>
      <h2 className='popTitle'> 
      {popUp.title} 
      </h2>
      
      
      <p className='originalLanguage'>Original Language: {popUp.original_language} &nbsp; &nbsp; {popUp.popularity} &nbsp; &nbsp; Rating: {popUp.vote_average}
      </p>
      <p className='overview'>{popUp.overview}</p>
      <div className='btnDiv'>
      <Link to='/list' ><button onClick={handleClick}>ADD LIST</button></Link>
          <Link to='/list'><button>MY LIST</button></Link></div>
      </div>
      
      </div>

      <span className='exitPopup' onClick={()=>{
      document.querySelector('.popup').style.display = 'none'
      }}> 
      X
      </span> 
    </div>
  )
}
