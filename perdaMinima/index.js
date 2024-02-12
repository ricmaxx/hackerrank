function solucao(precos) {
  // seu codigo aqui
  let menorDiferenca = Infinity;
  for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      let compra = precos[i];
      let venda = precos[j];
      let diferenca = compra - venda;
      if (diferenca > 0) {
        if (diferenca < menorDiferenca) menorDiferenca = diferenca;
      }
    }
  }
  console.log(menorDiferenca);
}

function processData(input) {
  const precos = input.split(" ").map((x) => parseInt(x));
  solucao(precos);
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
