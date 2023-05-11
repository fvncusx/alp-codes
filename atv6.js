let n1 = Number(prompt("Digite o número 1:"));
let n2 = Number(prompt("Digite o número 2:"));
let n3 = Number(prompt("Digite o número 3:"));
if(n1>n2 && n1>n3){
    document.write(`${n1} é o maior dos 3 números.`)
} else if(n2>n1 && n2>n3){
    document.write(`${n2} é o maior dos 3 números.`)
} else if(n3>n1 && n3>n2){
    document.write(`${n3} é o maior dos 3 números.`)
} else if(n1==n2 && n1==n3){
    document.write("Os números são iguais.")
} 