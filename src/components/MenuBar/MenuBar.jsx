import React, { useEffect } from 'react'
import './MenuBar.css'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
export default function MenuBar({user}) {

const section1 = document.querySelector('.menuBar')
useEffect(()=>{
  window.addEventListener('scroll', () => {
    if(window.scrollY>50){
    section1.style.backgroundColor = `black`
    }
    else{
      section1.style.backgroundColor = `rgba(0, 0, 0, 0)`
    }
  })
})

  return (
    <motion.div
    transition={{duration:2}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
    className='menuBar'>
        <Link to='/'><img  className="navLogo" src="https://lh3.googleusercontent.com/pw/AIL4fc9XoAYrysFjZIE9l0kQdAJeBoJE2kIZKJyljRX5KEgLdxJ-7J0SCo6Ekp93hIbRPf31ET7ItyW7YjNk9zKFZK2HU7PxSX-NleGnUXpem4Wm7guQ_f0DaCdv-NPWpUeog0cnOn8DVl2H_FTWY939l173Pf2ldgtVoC8VPV7zhn4Yb3qkBjrHi2tUAYu4OOOxWJvCKe9obqT1ats0X4oukhYsOyE3bDvfAl084DUBGoHjzkY8Cr8hoq6eb8h-w6bDkaEqAYdPAQZKj-JNV9oUxcmfeKB1D4gQuS1W7HcmT10g9h289Ul3BlchXy4h4dh0RbRRdx6bFUTZEW3qMgaeS3BVVNdUTHnuftTo-CP0RtDN_NOPT8mPmuq1HR11cxYhi9K6QtP0E73uQDDqaEEH2Xi-CQcTeimkaI5BBKuItq1FYYvh9FZphkk_SIHmS9uBdOb7oCPhvtcLAX7mJGiJaXhLK66YoQ48br35PXPra6QUkfHxq1z1ZiZ4YPRK4MgV3i0VSChbL6Dswl8JC_PruOJ4UIWhZgVmkakRwuNKlMHi097l2az9dk5M4QxHUoo1GbRkZlkLwMradSjkFQOaxIUjeddiwSGJbCYKGvBzQeqmirK_IrtPn5FnkyIB-Anr2QRcoxaJlWVAFlDOAELDZW5MtzFuIEL32IHGPWWxgzHI9B84-YKiqmAvwRu_iHKbntAbJmy8NcD4mzSHmLeHZPd0H8-h3bDe0KXFSiXvVKx_YEXuqXOmBLoz_Hm70hSvvo_Yyj4L83x_LctMOaRNVk3K6MdEeI01WaFcoG_Y6QkYN_xqwBrj0PG8jw6KI0hXkbnilSn9Q0ly5o6czQWYPBDQtNL1WIN372VRiqj-toSSenomkcpuXTPvqGi9hG5b9g3mJYjfQdV9nfYwSHd9vhVoB0SIvhscfsjOaSeVSMtZe4mi5MvNg8WUGUzt0qcEH47-GFMQ2oeV4TXm03Y3q5xosHQ6aK8=w1515-h549-s-no?authuser=0" alt="Netflix Logo"></img></Link>
        <div className='menuBarFlex'>
        
        <Link to='/search'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="28x28" fill="#d1d1d1" class="mercado-match" width="28" height="28" focusable="false">
  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
</svg></Link>
        <p className='mm' onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}}>MENU</p>
        <Link to='/kids'><p>KIDS</p></Link>
        <Link to='/'><p>HOME</p></Link>
        <Link to='/list'><svg aria-hidden="true" focusable="true" viewBox="0 0 92.01 66.78" height='28' width='35' fill="#d1d1d1" xmlns="http://www.w3.org/2000/svg"><g ><path d="m68.17 66.78a7.29 7.29 0 1 1 7.29-7.28 7.29 7.29 0 0 1 -7.29 7.28zm0-10.57a3.29 3.29 0 1 0 3.29 3.29 3.29 3.29 0 0 0 -3.29-3.29z"></path><path d="m28.45 66.78a7.29 7.29 0 1 1 7.29-7.28 7.29 7.29 0 0 1 -7.29 7.28zm0-10.57a3.29 3.29 0 1 0 3.29 3.29 3.29 3.29 0 0 0 -3.29-3.29z"></path><path d="m22.15 46.94-13.51-42.94h-8.64v-4h10.11a2 2 0 0 1 1.89 1.4l14 44.34z"></path><path d="m23.04 44.13h4v10.65h-4z" transform="matrix(.9555875 -.29470752 .29470752 .9555875 -13.46 9.58)"></path><path d="m33.74 57.49h29.15v4h-29.15z"></path><path d="m77.26 48.34h-53.17a2 2 0 0 1 -1.91-1.4l-10.09-32.09a2 2 0 0 1 1.91-2.6h76a2 2 0 0 1 1.87 2.75l-12.75 32.07a2 2 0 0 1 -1.86 1.27zm-51.71-4h50.35l11.17-28.09h-70.35z"></path></g></svg></Link>
        <img onClick={()=>{document.querySelector('.menuBar').style.display='none';document.querySelector('.nav').style.display='flex'}} className="navAvatar" src={user.profilePic} alt="Netflix Logo"></img>
        </div>
    </motion.div>
  )
}
