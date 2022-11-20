window.addEventListener('DOMContentLoaded', () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    function generateKey(length, source) {
        let result = '';
        while (result.length < length) {
            const randomIndex = Math.floor(Math.random() * source.length);
            result += source[randomIndex];
        } 
        return result;
    } 
    const key = generateKey(16, characters);
    console.log(key);
});