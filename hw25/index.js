window.addEventListener('DOMContentLoaded', () => {

    function map(arr, cb) {
        const result = [];

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            result.push(cb(element, i, arr));   
        }

        return result;
    }

    // OR
    
    Array.prototype.customMap = function(cb) {
        const result = [];
        
        for (let i = 0; i < this.length; i++) {
            const element = this[i];
            result.push(cb(element, i, this));   
        }
        
        return result;
    }
});