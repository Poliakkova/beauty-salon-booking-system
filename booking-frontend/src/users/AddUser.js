import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import api from '../js/axios';

export default function AddUser () {

    // Хук для навігації після додавання користувача
    let navigate = useNavigate()

    // Стан для зберігання даних нового користувача
    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:""
    });

    // Розпаковка полів користувача для зручності доступу
    const {firstName, lastName, email, phone} = user

    // Функція для обробки змін у полях форми
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    // Функція для обробки відправки форми
    const onSubmit = async (e) => {
        e.preventDefault();
        await api.post("users/user", user);
        navigate("/users");
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 my-4'>
                <h2 className='text-center m-4'>Зареєструвати користувача</h2>

                <form onSubmit={(e)=>onSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor='FirstName' className='form-label'>
                            Імʼя
                        </label>
                        <input className='form-control' type='text'
                            placeholder='Введіть імʼя...' name='firstName'
                            value={firstName} onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='LastName' className='form-label'>
                            Прізвище
                        </label>
                        <input className='form-control' type='text'
                            placeholder='Введіть прізвище...' name='lastName'
                            value={lastName} onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>
                            Пошта
                        </label>
                        <input className='form-control' type='email'
                            placeholder='Введіть пошту...' name='email'
                            value={email} onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='Phone' className='form-label'>
                            Телефон
                        </label>
                        <input className='form-control' type='text'
                            placeholder='Введіть телефон...' name='phone'
                            value={phone} onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <button type='submit' className='btn btn-outline-dark'>Підтвердити</button>
                    <Link to="/users" className='btn btn-outline-danger mx-2'>Відмінити</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
