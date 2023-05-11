let n1 = Number(prompt("Digite a nota 1:"));
let n2 = Number(prompt("Digite a nota 2:"));
media = (n1 + n2) / 2;
if(media>=7){
    document.write(`Sua média é ${media}, você foi aprovado, parabéns!`);
} else{
    document.write(`Sua média é ${media}, você foi reprovado, parabéns!`);
}
