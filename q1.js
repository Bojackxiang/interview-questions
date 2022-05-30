/**
 * Solution for question 1
 */
function limitItems(items, pageSize, pageNumber) {
  // invalid input
  if (
    pageSize < 0 ||
    pageNumber < 0 ||
    isNaN(pageSize) ||
    isNaN(pageNumber) ||
    !checkNumberType(pageSize) ||
    !checkNumberType(pageNumber)
  ) {
    return [];
  }

  // calculate the page
  var start = (pageNumber - 1) * pageSize;
  var end = start + pageSize;
  return items.slice(start, end);
}

function checkNumberType(value) {
  if (typeof value === "number") {
    return true;
  }
  return false;
}

module.exports = limitItems;
