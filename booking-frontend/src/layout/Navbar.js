import { Link, NavLink } from 'react-router-dom'
import { isAuthenticated } from '../js/auth';

export default function () {

  // Функція для обробки виходу користувача
  const handleLogout = () =>{
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#d74785'}}>
            <div className="container-fluid">
              <div className='menu d-flex'>
                <div className="navbar-brand" style={{color: '#fff'}}>BeautyNails</div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav nav-underline">
                  <li className="nav-item">
                    <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                    to="/" style={{color: '#fff'}}>Головна</NavLink>
                  </li>
                  {isAuthenticated() && (
                    <li className="nav-item">
                      <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
                      to="/users" style={{color: '#fff'}}>Усі користувачі</NavLink>
                    </li>
                  )}
                </ul>
              </div>

              <div className='auth d-flex gap-2'>
                {!isAuthenticated() && (
                  <Link className='btn btn-outline-light' to="/signup">
                    Реєстрація
                  </Link>
                )}
                
                {!isAuthenticated() && (
                  <Link className='btn btn-outline-light' to="/login">
                    Вхід
                  </Link>
                )}
                
                {isAuthenticated() && (
                  <Link className='btn btn-outline-light' onClick={handleLogout}>
                    Вийти
                  </Link>
                )}
              </div>
            </div>
        </nav>
    </div>
  )
}
