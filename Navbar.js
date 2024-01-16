import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import logo from './img/Imala.png'

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

export default function Navbar() {


  
  return (
    
    <nav className='navbar_airbnb'>
      <div className='navbar_airbnb_desktop'>
        <div className='logo'>   <Link to="/"><img src={logo} alt="logo" /></Link></div>
<div className='onglet_airbnb'>
    <p>LOGEMENTS</p>
    <Link to="apropos">A PROPOS</Link>
    <Link to="contact">CONTACT</Link>
    <Link to="gpimala">GROUPE IMALA</Link>
   
</div>
<div className='btn_connecter' >
    <button type='submit'>SE CONNECTER</button>
</div>
<div className='navbar_flag'><Icon icon="openmoji:flag-france" width="50" height="50" /></div>

</div>
{/*menu mobile*/ }
<div className='navbar_airbnb_mobile'>
  
<div className='logo_mobile'> <Link to="/"><img src={logo} alt="logo" /></Link></div>
<div className='onglets_airbnb_mobile'>
<div className='btn_connecter' >
    <Icon icon="iconamoon:profile-circle-light" color="#3864ff" width="50" height="50" />
</div>

<span className='burger_icon' onClick={openNav} >☰ </span>
<div id="myNav" className="overlay">
  <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>×</a>
  <div className="overlay-content">
  <h1 className="logo" > <Link to="/"><img src={logo} alt="logo" /></Link></h1>
  <Link to={'/'}>Accueil</Link>
  <Link to="apropos">A Propos</Link>
    <Link to="contact">Contact</Link>
    <Link to="gpimala">Groupe Imala </Link>
  </div>
  
  </div>
</div>                      
</div>



    </nav>
  )
}
