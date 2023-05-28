  import React,{useState} from 'react'
  import '../css/navbar.css';
  import {FaArrowCircleUp} from 'react-icons/fa';
  import { Button } from './Styles';

  export default function NavBar() {  

    const [visible, setVisible] = useState(false)
  
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
      }; 
    window.addEventListener('scroll', toggleVisible);
    const openmenu= ()=>{
      var sidemenu = document.getElementById("sidemenu");
      sidemenu.style.right = "0"
    }
    const closemenu= ()=>{
      var sidemenu = document.getElementById("sidemenu");
      sidemenu.style.right = "-200px"
    }
    
    return (
      <div>
      <div className="container-nav">
      <nav>
          <img src="./namelogo.png" alt="img" className="logo"/>
          <ul id="sidemenu">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#journey">Journey</a></li>
              <li><a href="#contact">Contact</a></li>
              <Button title="scroll to top">
                <FaArrowCircleUp onClick={scrollToTop} 
                style={{display: visible ? 'inline' : 'none' ,align:'left'}} />
              </Button>
              <i className='fas fa-times' onClick={()=>closemenu()}></i>
          </ul>
          <i className='fas fa-bars' onClick={()=>openmenu()}></i>
      </nav>
      </div>
      </div>
    )
  }
