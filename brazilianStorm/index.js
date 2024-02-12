function solucao(notas) {
  //seu codigo aqui
  let menorValor = Math.min(...notas);
  let maiorValor = Math.max(...notas);
  let tamanhoArray = notas.length - 2;
  let notaTotal = 0;

  for (nota of notas) {
    notaTotal += nota;
  }
  let media = (notaTotal - menorValor - maiorValor) / tamanhoArray;
  console.log(media);
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
