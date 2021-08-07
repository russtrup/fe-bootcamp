// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['@bootcamp/graphql']);

module.exports = withTM();
