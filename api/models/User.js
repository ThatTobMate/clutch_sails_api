/**
 * User
 * See https://ericswann.wordpress.com/2015/04/24/nozus-js-1-intro-to-sails-with-passport-and-jwt-json-web-token-auth/
 * @description :: Model for storing users
 */
module.exports = {
    schema: true,
    identity: 'users',
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true,
            alphanumericdashed: true
        },
        password: {
            type: 'string'
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        firstName: {
            type: 'string',
            defaultsTo: ''
        },
        lastName: {
            type: 'string',
            defaultsTo: ''
        },
        photo: {
            type: 'string',
            defaultsTo: '',
            url: true
        },
        socialProfiles: {
            type: 'object',
            defaultsTo: {}
        },
        clans: {
            collection: 'clans',
            via: 'users'
        },
 
        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            delete obj.socialProfiles;
            return obj; // This function is deleting sensitive information like the password and social network access details from the returned object.
        }
    },
    beforeUpdate: function (values, next) {
        AuthTokenService.hashPassword(values);
        next();
    },
    beforeCreate: function (values, next) {
        AuthTokenService.hashPassword(values);
        next();
    }
};