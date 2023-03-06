export const isAuth = () => {

    if (localStorage.getItem('email')) {
        return localStorage.getItem('email');
    } else {
        return false;
    }
}
export const isAuthusername = () => {

    if (localStorage.getItem('username')) {
        return localStorage.getItem('username');
    } else {
        return false;
    }
}