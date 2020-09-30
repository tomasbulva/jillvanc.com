var chai = require('chai');
global.expect = chai.expect;

chai.use(require('chai-properties'));

var cleanUsername = function(s) {
    // remove spaces and slashes to make nice URLs
    return s.replace(/ /g, "_").replace("/", "");
};

var getTestName = function(test) {
    return cleanUsername(test.fullTitle());
};

var utils = function(api) {
    return {
        createUser: function(user) {
            return api.post('/user')
                .send(user)
                .then(function(res) {
                    return res.body;
                });
        },
        getSessionFor: function(user) {
            return api.post('/session')
                .send(user)
                .then(function(res) {
                    return res.body.session;
                });
        }
    };
};

// should only be used inside callbacks to `describe`
utils.getUserForTest = function(test) {
    var testName = getTestName(test);
    return {
        username: testName,
        email: testName+"@example.com",
        password: "password"
    };
};

utils.property = function(obj) {
    if (typeof obj === 'string') {
        return function(res) {
            expect(res.body).to.have.property(obj);
        };
    } else {
        return function(res) {
            expect(res.body).to.have.properties(obj);
        };
    }
};

module.exports = utils;
