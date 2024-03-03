import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show ? 'nav__black' : ''}`}>
      <div className="nav__contents">
        <Link to="/">
        <img
        
          className='nav__logo'
          src="https://th.bing.com/th/id/R.4d30a09d38e6dfe3feaa31920a680108?rik=GnWkgmKvj5nwNg&riu=http%3a%2f%2fwww.cultjer.com%2fimg%2fug_photo%2f2016_09%2f76248820160921034356.jpg&ehk=grD%2fdqb%2b43FMvO3KHmAdPwgUvOikuZkwrJQwMPdCHUM%3d&risl=&pid=ImgRaw&r=0"
          alt="Netflix Logo"
        />
        </Link>
        <Link to="/profile"> {/* Using Link for navigation */}
          <img
            className='nav__avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="New Avatar Logo"
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
