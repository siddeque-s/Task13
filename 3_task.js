// * * * * * 
// * *   * * 
// *   *   *
// * *   * *
// * * * * *


for (i = 1; i <= 5; i++) {
  str = "";
  for (j = 1; j <= 5; j++) {
    if (j == 1 || i == j || i == 5 || j == 5 || i == 1 || j == 5 - i + 1) {
      str = str + "* ";
    } else {
      str = str + "  ";
    }
  }

  console.log(str);
}
