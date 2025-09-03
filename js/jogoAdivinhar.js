var num, numSorteado;

numSorteado = parseInt(Math.random()*(101))

num = parseInt(prompt("Digite um número de 1 a 100:"));

while (num!=numSorteado){
    if(num>numSorteado){
        alert("Alto")
    }
    else{
        alert("Baixo")
    }
    num = parseInt(prompt("Digite um número de 1 a 100:"));
}

alert("Parabéns, você acertou!")
