
exports.min = function min (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  }
  else {
    let min_i = array[0];
    array.forEach(item => {
      if (item < min_i ) min_i = item;
    });

    return min_i;
  }
}

exports.max = function max (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  }
  else {
    let max_i = array[0];
    array.forEach(item => {
      if (item > max_i ) max_i = item;
    });

    return max_i;
  }
}

exports.avg = function avg (array) {
  if (typeof array === 'undefined' || array.length === 0) {
    return 0;
  }
  else {
    let sum = 0;
    let count = 0;
    array.forEach(item => {
      sum += item;
      count += 1;
    });

    return sum / count;
  }
}
