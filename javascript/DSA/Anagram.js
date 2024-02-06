function anaacheck(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let aobj1 = {};
  let aobj2 = {};

  for (let i = 0; i < str1.length; i++) {
    aobj1[str1[i]] = (aobj1[str1[i]] | 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    aobj2[str2[j]] = (aobj2[str2[j]] | 0) + 1;
  }

  for (let va in aobj1) {
    if (!(va in aobj2)) {
      return false;
    }

    if (aobj2[va] !== aobj1[va]) {
      return false;
    }
  }

  return true;
}

let str1 = "cat";
let str2 = "tac";

console.log(anaacheck(str1, str2));
