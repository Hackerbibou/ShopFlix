import {addList, getList, removeItem} from '../../utilities/list-api'


export default function PopupRemove({popUp, setList}) {

    function handleClick(name){
    
        (async()=>{
            const movi = await removeItem(name)
            
        })() 
        setTimeout(()=>{
          (async()=>{
            const moo = await getList()
            setList(moo)
            
        })()
         },1) 
          
        
        
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
            <button onClick={(e)=>{document.querySelector('.popup').style.display = 'none';handleClick(popUp.name) }}>Remove</button>
            
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
    