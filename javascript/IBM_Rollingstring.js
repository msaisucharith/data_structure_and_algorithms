function rollingString(s, operations) {
  for (let i = 0; i < operations.length; i++) {
    let str = s.split("");

    let [ii, jj, rl] = operations[i];

    let ina = s.charCodeAt(ii);
    let jna = s.charCodeAt(jj);

    if (rl === "L") {
      if (str[ii] == "a") {
        str[ii] = "z";
      }
      if (str[jj] == "a") {
        str[jj] = "z";
      } else {
        str[ii] = String.fromCharCode(ina - 1);
        str[jj] = String.fromCharCode(jna - 1);
      }
    }

    if (rl === "R") {
      if (str[ii] == "z") {
        str[ii] = "a";
      }
      if (str[jj] == "z") {
        str[jj] = "a";
      } else {
        str[ii] = String.fromCharCode(ina + 1);
        str[jj] = String.fromCharCode(jna + 1);
      }
    }

    s = "";

    for (let i = 0; i < str.length; i++) {
      s = s + str[i];
    }
  }

  console.log(s);
}

let s = "ddd";

let operations = [
  [1, 2, "L"],
  [1, 2, "L"],
  [1, 2, "L"],
  [1, 2, "L"],
  [1, 2, "L"],
  [1, 2, "R"],
  [1, 2, "R"],
  [1, 2, "R"],
  [1, 2, "R"],
];

console.log(rollingString(s, operations));
