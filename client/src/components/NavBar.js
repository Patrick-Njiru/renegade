import React from 'react'
// import './Navbar.css'
import '../index.css'

function Navbar() {
  return (
    <>
      <div className='nav-container'>
        <div className='nav-upper'>
          <div className='nav-heading'>
            <h1 clacompany-namessName='company-name'><a href='/home'> Renegade</a></h1>
            <div className='nav-brand'>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt=''></img>
              <i class="fa fa-user-circle" aria-hidden="true"></i>
              <h2 className='dev-name'>Alex</h2>
              <h3 className='dev-id'>Developer</h3>
            </div>
          </div>

          <div className='nav-dash'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ucvuvELzjICuBFdrCDZvjEZQaJ1eavD_XQ&usqp=CAU' alt=''></img>
            <h2><a href='/dashboard'>Dashboard</a></h2>
          </div>

          <div className='nav-dash'>
            <img src='https://cdn-icons-png.flaticon.com/512/3329/3329448.png' alt=''></img>
            <h2><a href='/dashboard'>Log out</a></h2>
          </div>
        </div>
      </div>
        
       
    </>
  )
}

export default Navbar;