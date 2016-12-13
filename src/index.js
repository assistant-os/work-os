const packageJson = require('./../package.json');
const tracking = require('./tracking');

module.exports = function (ai) {
    ai.addModule({
        id: packageJson.name,
        commands: [].concat(tracking(ai))
    });
};
