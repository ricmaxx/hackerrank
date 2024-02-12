function solucao(disparos) {
  //seu codigo aqui
  let pontos = [];
  for (pontuacao of disparos) {
    if (pontuacao > 70) {
      pontos.push(pontuacao);
    }
  }
  if (pontos.length < 3) {
    console.log("ELIMINADO");
  } else {
    console.log(pontos.length);
  }
}

function processData(input) {
  solucao(
    input
      .split(" ")
      .map((x) => Number(x))
      .filter((x) => x)
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
