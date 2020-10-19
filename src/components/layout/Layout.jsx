import React, { useState } from "react";
import "./Layout.scss";
import { Link } from "react-router-dom";

function Layout( {children} ) {
  const [menu, setMenu] = useState(false);

  return (
    <div id='layout'>
      <header>
        <div className='logo-container'>
          <img src='/assets/img/electrologo.jpg' alt='electro mechanics vt' />
          <h1>ELECTROMECHANICS <span className="red-text">VT</span></h1>
        </div>

        <div className='icons-container'>
          <a href='mailto:electromech.com'>
            <span class='material-icons'>mail_outline</span>
          </a>

          <Link to='#' onClick={() => setMenu(!menu)}>
            {!menu ? (
              <span class='material-icons'>menu</span>
            ) : (
              <span class='material-icons red-text'>close</span>
            )}
          </Link>
        </div>
      </header>

      {children}

      <footer>
        <p>© Electromechanicsvt 2020 - All Rights Reserved</p>

        <div className="icons-container">
        <Link>
          <i class="fab fa-facebook"></i>
          </Link>

          <Link>
          <i class="fab fa-instagram"></i>
          </Link>

          <Link>
          <i class="fab fa-twitter"></i>
          </Link>
        </div>
      </footer>

      {menu && (
        <aside>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>

            <li>
              <Link to='/'> About Us </Link>
            </li>

            <li>
              <Link to='/'> Products and services </Link>
            </li>

            <li>
              <Link to='/'> Contact Us </Link>
            </li>

            <li>
              <Link to='/'>Blog </Link>
            </li>
          </ul>
        </aside>
      )}

      
    </div>
  );
}

export default Layout;
