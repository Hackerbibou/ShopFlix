import React, {useEffect, useState} from 'react'
import {getList} from '../../utilities/list-api'
import {motion} from 'framer-motion'
import PopupRemove from '../Movies/PopupRemove'

export default function MyList({list,setList}) {
    const [ee,setE]=useState(0)
    const [pop,setPop]=useState({})
    const [d, setD]=useState(0)
    useEffect(()=>{
        (async()=>{
            
            const movi = await getList()
            setList(movi)
            setD(1)
        })()
        
        
    },[d])
    

    
  
    return (
        <div >
            <PopupRemove setList={setList} popUp={pop}/>
            <h1>My List</h1>
            <div className='UpcomingWrapper'>
                
                
                {list.length<1?<>No movies added yet</>:list.map((elem,i)=>{
                    return < motion.div
                    transition={{delay:0.1*i}}
                    initial={{opacity:0,x:10,delay:0.1*i}}
                    animate={{opacity:1,x:0,delay:0.5*i}}
                    exit={{opacity:0,x:20,delay:0.1*i}}
                    onClick={(e)=>{ e.preventDefault();setPop(elem.items);document.querySelector('.popup').style.display = 'flex'}}
                    key={i} className='movie1' style={{backgroundImage: `url("https://www.themoviedb.org/t/p/original${elem.items.backdrop_path}")`}}/>
                })
                }</div>
        </div>
      )
}

