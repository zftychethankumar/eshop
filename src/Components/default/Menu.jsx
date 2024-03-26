import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../CustomHook/Auth'
import { toast } from 'react-toastify'

function Menu() {
    //context values
    const {contextData,setToken} = useAuth()

    //router instance
    const navigate = useNavigate()

    //logout logic
    const logout = async()=>{
        if(window.confirm('Are you sure to logout')){
            setToken(false)
            toast.success('logout successfully')
            navigate('/')
        }else{
            toast.warning('logout terminated')
        }
    }

    const openSidebar = () => {
        document.getElementById("sideMenu").classList.add("active")
    }
    const closeSidebar = () => {
        document.getElementById("sideMenu").classList.remove("active")
    }
    return (
    <React.Fragment>
        <header>
            <nav className="navbar">
                <div className="container">
                    <button className="btn-menu" onClick={openSidebar}>
                        <i className="bi bi-list"></i>
                    </button>
                    <NavLink to={'/'} className="logo">React-E-Shop</NavLink>
                    <div>
                    <NavLink to={'/cart'} className="cart">
                        <i className="bi bi-cart-fill"></i>
                    </NavLink>
                    {
                        contextData.token ?
                        <button onClick={logout} style={{marginLeft:'10px'}} className="btn btn-danger"><i className="bi bi-box-arrow-right"></i></button>:null
                    }
                    </div>
                </div>
            </nav>
        </header>
        {/* sidebar menu */}
        <div className="sidebar" id='sideMenu'>
            <div className="sidebar-header">
                <h4 className='sidebar-title'>React-E-Shop</h4>
                <button className="btn close" onClick={closeSidebar}>
                    <i className="bi bi-x"></i>
                </button>
            </div>
            <div className="sidebar-body">
                <ul className="menulist">
                    <li className="menu-item">
                        <NavLink to={'/'} className="menu-link">Home</NavLink> 
                    </li>
                    <li className="menu-item">
                        <NavLink to={'/about'} className="menu-link">About</NavLink> 
                    </li>
                    <li className="menu-item">
                        <NavLink to={'/contact'} className="menu-link">Contact</NavLink> 
                    </li>
                </ul>
            </div>
        </div>        
    </React.Fragment>
  )
}

export default Menu