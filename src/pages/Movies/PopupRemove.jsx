import {addList, getList, removeItem} from '../../utilities/list-api'


export default function PopupRemove({popUp, list, setList}) {

    function handleClick(name){
        let temp=list.filter((elem)=>elem.name===name)
        let tempo=[...list.filter((elem)=>elem.name===name)]
        let tempi=[...list.filter((elem)=>elem.name!==name)]
        console.log(temp)
        console.log(tempo)
        console.log(tempi)
        
        (async()=>{
            const movi = await removeItem(name)
            
        })() 
        setList(temp)
        
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
    