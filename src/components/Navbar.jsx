import React , {useState} from 'react';
import {Link,useLocation} from 'react-router-dom'

const Navbar =()=>{
    const [isOpen,setIsOpen] = useState(false);
    const location = useLocation();
    const navItems = [
        {name:'Home',path:'/'},
        {name:'About',path:'/about'},
        {name:'Projects',path:'/projects'},
        {name:'Resume',path:'/resume'},
        {name:'Contact',path:'/contact'}
    ];
    const isActive=(path)=>location.pathname === path;
    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <Link to="/"className='navbar-logo'>Portfolio</Link>
            
            <ul className="navbar-menu">
                {navItems.map((item)=>(
                    <li key = {item.name} className="navbar-item">
                        <Link to = {item.path} className={`navbar-link ${isActive(item.path)?'active':''}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>

            <button className='navbar-toggle' onClick={()=>setIsOpen(!isOpen)}>
                {isOpen? '✖' : '☰'}
            </button>
            </div>

            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    {navItems.map((item)=>(
                        <li key = {item.name}>
                            <Link 
                            to = {item.path}
                            className={isActive(item.path)?'active':''}
                            onClick={()=>setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default Navbar