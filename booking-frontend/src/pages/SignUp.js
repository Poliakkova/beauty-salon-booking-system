import { useState } from 'react'
import api from '../js/axios';

export default function SignUp() {

    // Стан для зберігання даних користувача
    const [user, setUSer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });

    // Функція для обробки змін у полях форми
    const handleChange = (e) => {
        setUSer({...user, [e.target.id]: e.target.value});
    };

    // Функція для обробки відправки форми
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("auth/register", user);
            const token = response.data.token;

            localStorage.setItem("token", token);

            window.location.href = "/";
        } catch (error) {
            alert ("Помилка реєстрації");
            console.error("[DEV] Register error:"  + error);
        }
    };


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 my-4'>
                <h2 className='text-center m-4'>Реєстрація</h2>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className="col mb-3">
                            <label htmlFor="firstName" className="form-label float-start mb-0">Імʼя</label>
                            <input required type="text" className="form-control" id="firstName" onChange={handleChange}/>
                        </div>
                        <div className="col mb-3">
                            <label htmlFor="lastName" className="form-label float-start mb-0">Прізвище</label>
                            <input required type="text" className="form-control" id="lastName" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label float-start mb-0">Електронна пошта</label>
                        <input required type="email" className="form-control" id="email" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label float-start mb-0">Телефон</label>
                        <input required type="text" className="form-control" id="phone" onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label float-start mb-0">Пароль</label>
                        <input required type="password" className="form-control" id="password" onChange={handleChange}/>
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="password2" className="form-label float-start mb-0">Повторіть пароль</label>
                        <input required type="password" className="form-control" id="password2" onChange={handleChange}/>
                    </div> */}
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberme"/>
                        <label className="form-check-label float-start" htmlFor="rememberme">Запамʼятати мене</label>
                    </div>
                    <button type="submit" className="btn btn-dark">Зареєструватися</button>
                </form>
            </div>
        </div>
    </div>
  )
}
