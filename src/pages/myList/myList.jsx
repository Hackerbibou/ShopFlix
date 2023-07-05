import React, {useEffect, useState} from 'react'
import {getList} from '../../utilities/list-api'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import PopupRemove from '../Movies/PopupRemove'

export default function MyList({list,setList}) {
    // const temporary = [...list]
    // console.log('This is temporary '+temporary)
    const [pop,setPop]=useState({})
    
    useEffect(()=>{
       
        (async()=>{
            
            const movi = await getList()
            console.log('This is movi '+ movi[movi.length-1])
            setList(movi)
        })()
        
        
    },[setList])
    // console.log(list)
    //  if(!list.length && temporary.length>0){setList(temporary)}
    // console.log('This is list '+list[0])
    // console.log('This is temporary after functions name:'+temporary[0].name)
    // console.log('This is temporary after functions name:'+list[0].name)
    return (
        <div >
            <PopupRemove list={list} setlist={setList} popUp={pop}/>
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

