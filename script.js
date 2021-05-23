var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute){
    alert("Você acertou!")
    break
    //tentativas = 0
  }else if (chute > numeroSecreto) {
    alert ("O número secreto é menor que " + chute)
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    alert ("O número secreto é maior que " + chute)
    tentativas = tentativas - 1
  } 
}

if (chute != numeroSecreto) {
  document.getElementById("resultado").innerHTML = "Suas tentativas acabaram, o número secreto era: " + numeroSecreto
  //document.write("<h2>" + "Suas tentativas acabaram, o número secreto era: " + numeroSecreto + "</h2>")
}