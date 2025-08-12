import React, { useRef, useEffect, useState } from 'react';

export default function Navbar() {
  // HAMBURGER
  const [activeNav, setActiveNav] = useState(false);
  function toggleClass(){
    setActiveNav(prev => !prev); 
  }


  // NAVBAR FIXED
  const [fixedNav, setFixedNav] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleScroll(){
      if(window.pageYOffset > headerRef.current.offsetTop ){
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);    
  }, []);

  return (
    <header ref={headerRef} className={`bg-transparent absolute top-0 left-0 w-full flex item-center z-20 ${fixedNav ? 'navbar-fixed' : ''} `}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-lg text-primary block py-6">Hiroba</a>
          </div>
          <div className="flex items-center px-4">
            <button onClick={toggleClass} className={`block absolute right-4 lg:hidden ${activeNav ? 'hamburger-active' : ''} `} id="hamburger_button" name="hamburger" type="button">
              <span id="hamburger" className={`hamburger-line transition duration-300 ease-in-out origin-top-left `}></span>
              <span id="hamburger" className={`hamburger-line transition duration-300 ease-in-out `}></span>
              <span id="hamburger" className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left `}></span>
            </button>
            
            <nav id="nav-menu" className={` ${activeNav ? '' : 'hidden'} absolute py-5 bg-dark bg-opacity-95 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none `}>
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-base text-white py-2 mx-8 flex group-hover:text-primary">Beranda</a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-white py-2 mx-8 flex group-hover:text-primary">Tentang Saya</a>
                </li>
                <li className="group">
                  <a href="#repo" className="text-base text-white py-2 mx-8 flex group-hover:text-primary">Repository</a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-base text-white py-2 mx-8 flex group-hover:text-primary">Blog</a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-white py-2 mx-8 flex group-hover:text-primary">Contact</a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>  
  );
}

