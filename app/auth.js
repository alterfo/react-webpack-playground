module.exports = {
    login(email, pass, cb) {
        if (localStorage.token) {
            cb && cb(true);
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token;
                cb && cb(true)
            } else {
                cb && cb(false)
            }
        })
    },

    getToken() {
        return localStorage.token;
    },

    logout(cb) {
        delete localStorage.token;
        cb && cb()
    },
    loggedIn() {
        return !!localStorage.token;
    }

};

function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email === 'test@test.test' && pass === 'testtest1') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({authenticated: false})
        }
    }, 0)
}