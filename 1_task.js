// * 
// * * 
// *   *
// *     *
// * * * * *


for (let i = 1; i <= 5; i++) {
  res = "";
  for (j = 1; j <= i; j++) {
    if (j == 1 || i == 5 || i == j) {
      res = res + "* ";
    } else {
      res = res + "  ";
    }
  }
  console.log(res);
}
