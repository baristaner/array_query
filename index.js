const _ = require('lodash');

function filterByQuery(data, query) {
  return _.filter(data, (item) => {
    return matchesQuery(item, query);
  });
}

function matchesQuery(item, query) {
  return _.every(query, (value, key) => {
    if (typeof value === 'object') {
      const [operator, operand] = Object.entries(value)[0];
      return evaluateOperator(item[key], operator, operand);
    } else {
      return item[key] === value;
    }
  });
}

function evaluateOperator(value, operator, operand) {
  switch (operator) {
    case '$eq':
      return value === operand;
    case '$gt':
      return value > operand;
    case '$lt':
      return value < operand;
    default:
      return false;
  }
}

module.exports = {
  filterByQuery,
};
