//O jogador teve 50 vitórias e 2 derrotas

function saldoVitorias (V,D){
  let sal = V - D
  return sal
}

let vitoria = 50
let derrota = 2
let saldo = saldoVitorias (vitoria,derrota)
let nivel

if (saldo <= 10) {
    nivel = "Ferro"
} else if (saldo >= 11 && saldo <= 20){
    nivel = "Bronze"
} else if (saldo >= 21 && saldo <= 50){
    nivel = "Prata"
} else if (saldo >= 51 && saldo <= 80){
    nivel = "Ouro"
} else if (saldo >= 81 && saldo <= 90){
    nivel = "Diamante"
} else if (saldo >= 91 && saldo <= 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

console.log ("O Herói tem saldo de vitórias de: " + saldo + ", e está no nível: " + nivel)