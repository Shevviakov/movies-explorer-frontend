class Api {
    constructor({ baseUrl, getHeaders }) {
        this._baseUrl = baseUrl;
        this._getHeaders = getHeaders;
    }

    _okResp(res) {
        if (res.ok) {
            return res.json();
        }
        console.log(`Error '${res.status} ${res.statusText}' ${res.url}`);
        return res.json().then(data => Promise.reject(data?.validation?.body?.message || data.message || 'Произошла ошибка'))
    }

    _errResp(res) {
        console.log(res);
        return Promise.reject("Произошла ошибка обработки запроса")
    }

    signup({ password, email, name }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ name, email, password })
        })
            .then(this._okResp, this._errResp)
    };

    signin({ email, password }) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ email, password })
        })
            .then(this._okResp, this._errResp)
    };

    signout() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
        })
            .then(this._okResp, this._errResp)
    };

    getMe() {
        return fetch(`${this._baseUrl}/users/me`, {
            credentials: 'include',
        })
            .then(this._okResp, this._errResp)
    }

    updateMe({ name, email }) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ name, email })
        })
            .then(this._okResp, this._errResp)
    };

}

const apiObj = new Api({
    baseUrl: `https://api.sheviakov.nomoredomains.monster`,
    getHeaders: () => {
        return {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            'Content-Type': 'application/json'
        }
    }
});

export default apiObj;
