// import fetch from '../lib/fetch';

export const login = (data) => {
    return fetch('https://studebt.herokuapp.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        document.cookie = `token=${response.token}`;
        return response;
    }).catch(error => {
        if (error.response) {
            console.log(error);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
    });

}

export const register = (data) => {
    return fetch('https://studebt.herokuapp.com/api/auth/users/register-school/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => {
        document.cookie = `token=${response.token}`;
        return response;
    }).catch(error => {
        if (error.response) {
            console.log(error.response);
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

