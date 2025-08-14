//      *
//     * *
//    *   *
//   *     *
//  * * * * *

for (i = 1; i <= 5; i++) {
  res = "";
  for (j = 5; j >= i; j--) {
    res = res + " ";
  }

  for (k = 1; k <= 5; k++) {
    if (k == 1 || k == i || i == 5) {
      res = res + "*";
    } else {
      res = res + " ";
    }
    res = res + " ";
  }
  console.log(res);
}
