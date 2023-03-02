export const isAuth = () => {

    if (localStorage.getItem('email')) {
        return localStorage.getItem('email');
    } else {
        return false;
    }
}