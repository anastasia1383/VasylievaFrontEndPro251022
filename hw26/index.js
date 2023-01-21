window.addEventListener('DOMContentLoaded', () => {

    function structureUserInfo(name) {
        let result = {};
        result.name = name;
        return function(role) {
            result.role = role;
            return result;
        }
    }

    console.log(structureUserInfo('John')('admin'));
});