//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

let count = 1;
for (let i = 5; i >= 1; i--) {
  res = "";
  for (j = 1; j <= i; j++) {
    res = res + "  ";
  }

  for (k = 1; k <= count; k++) {
    res = res + "* ";
  }
  count = count + 2;
  console.log(res);
}

let cnt = 7;
for (let i = 2; i <= 5; i++) {
  res = "";
  for (j = 1; j <= i; j++) {
    res = res + "  ";
  }

  for (k = 1; k <= cnt; k++) {
    res = res + "* ";
  }
  cnt = cnt - 2;
  console.log(res);
}
