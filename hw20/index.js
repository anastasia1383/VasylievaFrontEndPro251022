window.addEventListener('DOMContentLoaded', () => {
    let ladder = {
        step: 0,
        up: function () {
            this.step++;
            return this;
        },
        down: function () {
            this.step--;
            return this;
        },
        showStep: function () { 
            alert(this.step);
            return this; // in case we want to use up or down again
        }
    };
});
