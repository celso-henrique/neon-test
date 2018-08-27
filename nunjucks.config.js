const formatReal = require('./src/helpers/formatReal/formatReal');

module.exports = env => {
  env.addFilter('real', formatReal);
};
