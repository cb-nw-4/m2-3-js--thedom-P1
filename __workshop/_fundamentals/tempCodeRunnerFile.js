if (arr.every(function(element) {
    typeof element === "number";
  })) {
    for (var i = 0; i < arr.length; i++) {
      let summ = 0;
      summ += arr[i];
    }
    return summ;
  }