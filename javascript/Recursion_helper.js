function collectOddarr(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(collectOddarr(arr));

let ar = [1, 2, 3, 4];

console.log(ar.slice());
