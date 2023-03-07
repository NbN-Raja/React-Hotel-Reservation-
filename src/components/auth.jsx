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
export const isAuthid = () => {

    if (localStorage.getItem('id')) {
        return localStorage.getItem('id');
    } else {
        return false;
    }
}