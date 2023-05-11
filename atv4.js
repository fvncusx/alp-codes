let n1 = Number(prompt("Digite a nota 1:"));
let n2 = Number(prompt("Digite a nota 2:"));
let n3 = Number(prompt("Digite a nota 3:"));
media = (n1 + n2 + n3) / 3;
if(media>=7){
    document.write(`Sua média é ${media}, você foi aprovado, parabéns!`);
} else if(media>=5){
    document.write(`Sua média é ${media}, você ficou de recuperação, parabéns!`);
    let ef = Number(prompt("Digite a nota do exame final:"));
    mef = (media+ef) / 2; 
    if(mef>5){
        document.write(`Sua média é ${mef}, você foi aprovado, parabéns!`);
    }
} else{
    document.write(`Sua média é ${media}, você foi reprovado, parabéns!`);
} 