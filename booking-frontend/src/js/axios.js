import axios from "axios";

// Створення екземпляра axios з базовою URL-адресою
const api = axios.create({
    baseURL: "http://localhost:8080/"
});

// Додавання інтерсептора для автоматичного додавання токена авторизації до заголовків запитів
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;