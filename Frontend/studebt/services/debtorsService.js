export const addDebtor = (data) => {
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

    return fetch('https://studebt.herokuapp.com/api/debtorsapp/add-debtor/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            refresh_token: token,
            data
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

export const editDebtors = () => {
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

    return fetch('https://studebt.herokuapp.com/api/debtorsapp/view-debtors/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            refresh_token: token
        })

    }).then(response => {
        deleteCookie('token');
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

export const deleteDebtor = () => {
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

    return fetch('https://studebt.herokuapp.com/api/debtorsapp/add-debtor/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
            refresh_token: token
        })

    }).then(response => {
        deleteCookie('token');
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

export const getDebtors = () => {
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

    return fetch('https://studebt.herokuapp.com/api/debtorsapp/view-all-debtors/', {
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

export const getStudentDepts = ( id ) => {
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

    return fetch('https://studebt.herokuapp.com/api/debtorsapp/view-student-debts/' + id, {
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



