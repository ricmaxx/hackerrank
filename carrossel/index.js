function solucao(sequencia) {
  //seu codigo aqui
  let posicao = 0;

  for (let caminho of sequencia) {
    if (caminho === ">") {
      posicao++;
    } else {
      posicao--;
    }
    if (posicao < 0) {
      posicao = 6;
    } else if (posicao > 6) {
      posicao = 0;
    }
  }
  console.log(posicao);
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
