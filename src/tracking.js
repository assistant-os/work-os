function Tracking (ai) {

    this.ai = ai;
    this.id = 'tracking';
    this.user = null;

    this.valid = function (user, message, words) {
        if (this.ai.hasWords(words, 'tracking')){
            this.user = user;
            return true;
        } else {
            return false;
        }
    };

    this.do = function () {
        if (this.user) {
            this.ai.say(this.user, 'Yes I am tracking you!');
        }
        this.user = null;
    };
}

module.exports = function (ai) {
    return [
        new Tracking(ai)
    ];
};
