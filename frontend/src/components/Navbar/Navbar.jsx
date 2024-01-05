import { Link, NavLink } from "react-router-dom/dist/umd/react-router-dom.development"
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
    const [showSidebar,setShowSidebar]=useState(false)
    const handleSidebar=()=>{
        setShowSidebar(!showSidebar)
    }
    const {user}=useSelector(state=>state.franchise)
  return (
    <>

    <nav className="desktop_nav">
        <div className="nav_container">
            <div className="logo">
            <Link to="/">
                <img src="./images/logo.png" alt="" />

            </Link>
            </div>
            <div className="nav_links">
                <ul>
                <li>

                    <NavLink onClick={()=>handleSidebar()} exact to="/" >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/menu">
                    Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/locations">
                    Locations
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/mobile-app">
                    Mobile App
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/franchise">
                    Franchise
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/contact">
                    Contact
                    </NavLink>
                </li>

                {
                    user && (user.role==="admin" || user.role==="franchise") &&
                    (
                        <li>
                    <NavLink onClick={()=>handleSidebar()} to="/dashboard">
                    Dashboard
                    </NavLink>  
                </li>
                    )
                }
                </ul>
            </div>
            <div className="custom_search_bar">
<CiSearch className="search_icon" />
                <input type="text"  placeholder="Search" className="search_input"/>
            </div>
        </div>
    </nav>
    <nav className="mobile_nav ">
    <div className="mobile_nav_container flex justify-between  items-center w-[96%] py-5 px-4 h-20">

<div className="logo">
    <Link to="/"><img src="./images/logo.png" alt="" /></Link>
</div>
    <FaBars className="text-xl cursor-pointer" onClick={()=>handleSidebar()}/>
    </div>
   {
    showSidebar &&
    (
        <div className="mobile_nav_sidebar">
    <div className="header flex justify-between py-5 px-4 h-20 ">
    <div className="logo">
    <Link to="/"><img src="./images/whiteLogo.png" alt="" /></Link>
    </div>
    <div className="close">
    <FaBars className="text-xl cursor-pointer " onClick={()=>handleSidebar()}/>
    </div>
    </div>
    <div className="menu">

    <div className="custom_search_bar">
<CiSearch className="search_icon" />
                <input type="text"  placeholder="Search" className="search_input"/>
            </div>
    <div className="nav_links">
                <ul>
                <li>

                    <NavLink onClick={()=>handleSidebar()} exact to="/" >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/menu">
                    Menu
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/locations">
                    Locations
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/mobile-app">
                    Mobile App
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/franchise">
                    Franchise
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={()=>handleSidebar()} to="/contact">
                    Contact
                    </NavLink>
                </li>
                    
                    {
                        user && (user.role==="admin" || user.role==="franchise") &&
                        (
                            <li>
                        <NavLink onClick={()=>handleSidebar()} to="/dashboard">
                        Dashboard
                        </NavLink>
                    </li>
                        )
                    }
                
                </ul>   
                </div>

            </div>

    </div>

    )
   }
    </nav>
    </>

  )
}

export default Navbar