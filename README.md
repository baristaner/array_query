# Data Filtering and Querying npm Package

This npm package provides a simple and flexible way to filter and query data in JavaScript arrays. It allows you to filter an array of objects based on a query object containing conditions.

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install @baristaner/array_query
```
# Usage
You can use this package to filter data in your JavaScript arrays. Import the filterByQuery function and apply it to your data.
```js
const dataFilter = require("@baristaner/array_query");

const data = [
  { id: 1, title: "Movie A", year: 2000, genre: "Action", rating: 7.5 },
  { id: 2, title: "Movie B", year: 1995, genre: "Drama", rating: 8.2 },
  { id: 3, title: "Movie C", year: 2010, genre: "Comedy", rating: 6.9 },
  { id: 4, title: "Movie D", year: 1999, genre: "Action", rating: 7.8 },
  { id: 5, title: "Movie E", year: 2005, genre: "Drama", rating: 7.1 },
];

// Sample query to test filtering
const query = {
  genre: "Action",
  rating: { $gt: 7 },
};

// Use the imported filterByQuery function
const result = dataFilter.filterByQuery(data, query);

console.log("Filtered Movies:", result);
/* Console Output

Filtered Movies: [
  { id: 1, title: 'Movie A', year: 2000, genre: 'Action', rating: 7.5 },
  { id: 4, title: 'Movie D', year: 1999, genre: 'Action', rating: 7.8 }
]
*/
```

# Query Operators
This package supports the following query operators:

* $eq: Equality
* $gt: Greater than
* $lt: Less than

# Examples
Here are some examples of how to use the package:
```js
// Filter data where 'age' is equal to 30
const query = { age: { $eq: 30 } };

// Filter data where 'rating' is greater than or equal to 8.0
const query = { rating: { $gte: 8.0 } };

// Combine multiple conditions
const query = { genre: 'Action', year: { $gt: 2000 } };

```

# Contributing
Contributions are welcome! If you want to contribute to this project, please read the Contribution Guidelines before making a pull request.

# Support
If you have any questions or encounter issues, please create an Issue on our GitHub repository.


