function solucao(precos) {
  //seu codigo aqui
  let totalPagar = 0;
  let menorValor = precos[0];

  for (preco of precos) {
    totalPagar += preco;
    if (preco < menorValor) {
      menorValor = preco;
    }
  }
  if (precos.length >= 5) {
    totalPagar -= menorValor;
  }
  console.log(totalPagar);
}
function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
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
