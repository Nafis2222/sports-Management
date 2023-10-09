import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {
const {userFinal,LogOut} = useContext(AuthContext)
    const handleClick = () =>{
        LogOut()
        .then(res =>{
            console.log(res.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const navlinks = <>
    <li><NavLink to="/">Home </NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/cart">Cart</NavLink></li>
    
    </>
    return (
        <div>
         <div className="navbar bg-base-100">
           <div className="navbar-start">
             <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navlinks}
              </ul>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2'>
           <img className='w-16 h-12 rounded-full' src="https://i.ibb.co/hD4QhpH/sports-header.jpg" alt="" />
            <a className="btn btn-ghost normal-case text-xl">Sports Events</a>
           </div>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navlinks}
            </ul>
          </div>
          <div className="navbar-end">
          {
                userFinal ? <><img className='w-12 h-12 mr-1 rounded-full' src="https://i.ibb.co/L97LMXw/own-pic.jpg" alt="" />
                <Link><button onClick={handleClick} className='btn'>Sign out</button></Link></>
                
                : <>
                <img className='w-12 mr-2 h-12' src="https://i.ibb.co/J50xnVF/user.png" alt="" />
                <Link to="/login"><button className='btn'>Login</button></Link>
                </>

            }          </div>
        </div>
            
        </div>
    );
};

export default Navbar;