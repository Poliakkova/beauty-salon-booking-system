import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import api from '../js/axios';

export default function Users() {

    // Стан для зберігання списку користувачів
    const [users, setUsers] = useState([]);

    // Завантаження користувачів при монтуванні компонента
    useEffect(() => {
        loadUsers();
    }, []);

    // Функція для завантаження користувачів з API
    const loadUsers = async() => {
        const result = await api.get("users");
        setUsers(result.data);
    };

    // Функція для видалення користувача
    const deleteUser = async(id) => {
        await api.delete(`users/user/${id}`);
        loadUsers();
    };

  return (
    <div className='container'>
        <div className='py-4'>
            <Link className='btn btn-dark float-start mb-3' to="/adduser">
                Додати користувача
            </Link>

            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Імʼя</th>
                <th scope="col">Прізвище</th>
                <th scope="col">Пошта</th>
                <th scope="col">Телефон</th>
                <th scope="col">Дії</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index) => (
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <Link className='btn btn-dark mx-2' to={`/viewuser/${user.id}`}>Показати</Link>
                                <Link className='btn btn-outline-dark mx-2' to={`/edituser/${user.id}`}>Редагувати</Link>
                                <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Видалити</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    </div>
  )
}
