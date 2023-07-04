import React, {useEffect, useState} from 'react'
import {addList, getList, removeItem} from '../../utilities/list-api'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
export default function MyList() {
    const [list,setList]=useState([])
    const [d,setD]=useState(0)
    const [pop,setPop]=useState({})
    useEffect(()=>{
       
        (async()=>{
            
            const movi = await getList()
                setD(1)
            setList(movi)
        })()
        console.log(list)
        
        
    },[])
   
    
    return (
        <div
        >
            <PopUp popUp={pop}/>
            <h1>My List</h1>
            <div className='UpcomingWrapper'>
                
                
                {list.length<1?<>No movies added yet</>:list.map((elem,i)=>{
                    return < motion.div
                    transition={{delay:0.1*i}}
                    initial={{opacity:0,x:10,delay:0.1*i}}
                    animate={{opacity:1,x:0,delay:0.5*i}}
                    exit={{opacity:0,x:20,delay:0.1*i}}
                    onClick={(e)=>{ e.preventDefault();setPop(elem.items);document.querySelector('.popup').style.display = 'flex'}}
                    key={i} className='movie1' style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${elem.items.backdrop_path}")`}}>

    {elem.items.name}
                    </motion.div>
                })
                }</div>
        </div>
      )
}


function PopUp({popUp}) {
    
    function handleClick(name){
        (async()=>{
          
            console.log(name)
            const movi = await removeItem(name)
              
           
        })() 
        
    }
    
    
      return(
        <div
        
        className='popup' style={{backgroundImage:`url("https://www.themoviedb.org/t/p/original${popUp.backdrop_path}")`}}> 
         
          <div>
          <div className='movieTitle'>
          <h2 className='popTitle'> 
          {popUp.name} 
          </h2>
          
          <p className='originalLanguage'>Original Language: {popUp.original_language} &nbsp; &nbsp; Popularity: {popUp.popularity} &nbsp; &nbsp;
          </p>
          <p className='overview'>{popUp.description}</p>
          <div className='btnDiv'>
            <button onClick={(e)=>{document.querySelector('.popup').style.display = 'none';handleClick(popUp.name)}}>Remove</button>
            
          </div>
          
          </div>
    
          <span className='exitPopup' onClick={()=>{
          document.querySelector('.popup').style.display = 'none'
          }}> 
          X
          </span> 
        </div>
        </div>
      )
    }
    
