function solucao(stringCorrompida) {
  // seu codigo aqui
  let fraseFinal = "";
  for (let caracteres of stringCorrompida)
    if (
      caracteres == "!" ||
      caracteres == "@" ||
      caracteres == "#" ||
      caracteres == "$" ||
      caracteres == "%" ||
      caracteres == "&" ||
      caracteres == "*" ||
      caracteres == "(" ||
      caracteres == ")"
    ) {
    } else {
      fraseFinal += caracteres;
    }
  console.log(fraseFinal);
}
function processData(input) {
  solucao(input);
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
