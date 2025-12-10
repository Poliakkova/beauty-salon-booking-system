// Функція для перевірки, чи користувач автентифікований
export const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};
