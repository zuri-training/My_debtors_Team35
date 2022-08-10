// import fetch from '../lib/fetch';

export const login = (username, password) => {
    return fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(response => {
        document.cookie = `token=${response.data.token}`;
        return response.data;
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });

}

export const register = (name, email,
    password,
    password2,
    profile,
    propietor,
    phone,
    cac,
    is_school
    ) => {
    return fetch('https://studebt.herokuapp.com/api/auth/users/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            name, email, password, password2, profile, propietor, phone, cac, is_school
        })
    }).then(response => {
        document.cookie = `token=${response.data.token}`;
        return response.data;
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
}


export const logout = () => {
    return fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        document.cookie = `token=`;
        document.cookie = `user=`;
        document.cookie = `authenticated=false`;
        return response.data;
    }).catch(error => {
        if (error.response) {
            console.log(error.response.data);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });
}

