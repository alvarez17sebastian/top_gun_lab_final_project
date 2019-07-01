
import React from "react";
import { Link } from "react-router-dom";


// Función del router
function AppRouter() {
  return (

        <nav>
          <ul className='ul'>
           <Link  to="/employees" className='link'>
            <li className='li'>EMPLOYEES</li>
            </Link>
            <Link to="/prizes" className='link'>
            <li className='li'>PRIZES</li>
            </Link>
            <Link to="/achievements" className='link'>
            <li className='li'>ACHIEVEMENTS</li>
            </Link>
          </ul>
        </nav>
  )}   
export default AppRouter;