const {formatReal} = require('./helpers/formatReal/formatReal');

module.exports = env => {
  console.log('teste', formatReal);
  env.addFilter('real', formatReal);
};
