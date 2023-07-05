import {addList, getList, removeItem} from '../../utilities/list-api'


export default function PopupRemove({popUp, list, setList}) {

    function handleClick(name){
        let temp=list.filter(elem=>elem.items.name===name)
        console.log(temp)
        setList(temp)
     
        (async()=>{
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
            <button onClick={(e)=>{e.preventDefault();document.querySelector('.popup').style.display = 'none';handleClick(popUp.name)}}>Remove</button>
            
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
    