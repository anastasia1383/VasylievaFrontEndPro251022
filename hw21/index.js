window.addEventListener('DOMContentLoaded', () => {

    function reverse(str) {
        str = str.toLowerCase().replace(/\W/g, '');
        return str.split('').reverse().join('');
    }

    function singleCharacterPalindrome(str) {
        if (str === reverse(str)) return 'OK';
        for (let i = 0; i < str.length; i++) {
            let partial = str.substring(0, i) + str.substring(i + 1, str.length);
            let reversed = reverse(partial);
            if (partial === reversed) {
                return 'Remove One';
            }
        }
        return 'Not Possible';
    }

    console.log(singleCharacterPalindrome("abba")); // "OK"
    console.log(singleCharacterPalindrome("abbaa")); // "Remove One"
    console.log(singleCharacterPalindrome("abbaab")); // "Not Possible"
    console.log(singleCharacterPalindrome("madmam")); // "Remove One"
    console.log(singleCharacterPalindrome("raydarm")); // "Not Possible"
    console.log(singleCharacterPalindrome("hannah")); // "OK"
});




