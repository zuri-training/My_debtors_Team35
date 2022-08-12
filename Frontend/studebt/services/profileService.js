export const getSchoolProfile  = () => {
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

    return fetch('https://studebt.herokuapp.com/api/auth/users/school/dashboard/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            
        },
        credentials: 'include'

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

export const getStudentProfile  = () => {
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

    return fetch('https://studebt.herokuapp.com/api/auth/users/student/dashboard/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            
        },
        credentials: 'include'

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
