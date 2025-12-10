import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../js/axios';

export default function ViewUser() {

    // Стан для зберігання даних користувача
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    // Отримання параметра id з URL
    const {id} = useParams();

    // Завантаження даних користувача при монтуванні компонента
    useEffect(() => {
        loadUser();
    }, []);

    // Функція для завантаження даних користувача з API
    const loadUser = async () => {
        const result = await api.get(`users/user/${id}`);
        setUser(result.data);
    };

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-4'>
                <h2 className='text-center m-4'>Дані користувача</h2>  

                <div className='card'>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <b>ID: </b>
                            {user.id}
                        </li>
                        <li className='list-group-item'>
                            <b>First Name: </b>
                            {user.firstName}
                        </li>
                        <li className='list-group-item'>
                            <b>Last Name: </b>
                            {user.lastName}
                        </li>
                        <li className='list-group-item'>
                            <b>Email: </b>
                            {user.email}
                        </li>
                        <li className='list-group-item'>
                            <b>Phone: </b>
                            {user.phone}
                        </li>
                    </ul>
                </div>

                <Link className='btn btn-dark my-2' to={"/users"}>Повернутися</Link>
            </div>
        </div>
    </div>
    )
}
