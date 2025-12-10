import { useState } from 'react'
import api from '../js/axios';

export default function Login() {

    // Стан для зберігання даних користувача
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // Функція для обробки змін у полях форми
    const handleChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value});
    };

    // Функція для обробки відправки форми
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await api.post("auth/login", user);
            const token = response.data.token;
            localStorage.setItem("token", token);

            window.location.href = "/";
        } catch (error) {
            alert ("Помилка входу");
            console.log("[DEV] Login error: " + error);
        }
    };


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 my-4'>
                <h2 className='text-center m-4'>Вхід</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label float-start mb-0">Електронна пошта</label>
                        <input required type="email" className="form-control" id="email" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label float-start mb-0">Пароль</label>
                        <input required type="password" className="form-control" id="password" onChange={handleChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberme"/>
                        <label htmlFor="rememberme" className="form-check-label float-start">Запамʼятати мене</label>
                    </div>
                    <button type="submit" className="btn btn-dark">Увійти</button>
                </form>
            </div>
        </div>
    </div>
  )
}
