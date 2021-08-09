// pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules')(['lodash-es', '@bootcamp/graphql', '@bootcamp/stores']);

module.exports = withTM();
