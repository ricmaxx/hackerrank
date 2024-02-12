function solucao(primeiraLetra, segundaLetra, palavras) {
  //seu codigo aqui
  let encontrouPalavra = false;

  if (palavras.length === 0) {
    console.log("NENHUMA");
  } else {
    for (let palavra of palavras) {
      if (primeiraLetra === palavra[0] && segundaLetra === palavra[1]) {
        console.log(palavra);
        encontrouPalavra = true;
      }
    }

    if (!encontrouPalavra) {
      console.log("NENHUMA");
    }
  }
}
function processData(input) {
  const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
  solucao(primeiraLetra, segundaLetra, palavras);
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
