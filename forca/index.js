function solucao(palpite, palavra) {
  // seu codigo aqui
  let acertos = 0;

  for (let letra of palavra) {
    if (palpite === letra) acertos++;
  }
  console.log(acertos);
}

function processData(input) {
  const [palpite, palavra] = input.split(" ");
  solucao(palpite, palavra);
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
