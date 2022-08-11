let token = "";

if (typeof document !== 'undefined') {
    // get cookie token
    const cookies = document.cookie.split(';');
    cookies.forEach(cookie => {
        if (cookie.indexOf('token') > -1) {
            token = cookie.split('=')[1]
        }
    });
}

export const fetch = (url, options) => {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            'Authorization': `Bearer ${token}`
        }
    })
}
