window.addEventListener('DOMContentLoaded', () => {

    function getPasswordFromUser(success, fail) {
        let password = prompt("Password?", '');
        if (password === "rockstar") success();
        else fail();
    }

    let user = {
        fName: 'Andrew',

        loginSuccess() {
            alert(`${this.fName} logged in`);
        },

        loginFail() {
            alert(`${this.fName} failed to log in`);
        },

    };

    getPasswordFromUser(user.loginSuccess.bind(user), user.loginFail.bind(user));
});