
export const login = (data) => {
    return fetch('https://studebt.herokuapp.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
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
    let url = "";
    if (data.is_school) {
        url = "https://studebt.herokuapp.com/api/auth/users/register-school/";
    } else if (data.is_student) {
        url = "https://studebt.herokuapp.com/api/auth/users/register-student/";
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    }).then(response => {
        response = response.json();
        document.cookie = `token=${response.access}`;
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
    const cookies = document.cookie;
    const token = "";

    if (cookies) {
        const parsedCookies = cookies.split(';').map(cookie => cookie.split('='));
        const parsedCookiesObj = {};
        parsedCookies.forEach(cookie => {
            parsedCookiesObj[cookie[0].trim()] = cookie[1];
        });

        if (parsedCookiesObj.token) {
            token = parsedCookiesObj.token;
        }
      
    }

    return fetch('https://studebt.herokuapp.com/api/auth/users/logout/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify({
            refresh_token: token
        })

    }).then(response => {
        return response.json();
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

