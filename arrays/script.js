const nomes = [
    {nome: 'Ryu',
    tipo: 'vermelho',
    idade: 187},
    {nome: 'Akuma',
    tipo: 'fogo',
    idade:250}
]

/*o "let i = 0" cria um loop, o "i < nomes.lenght" faz com que o loop pegue todos os itens dentro do array e
o "i++" faz com que o loop siga o com o próximo número do array se não só iria mostrar o primeiro nome infinitamento
*/

/* PROGRAMA
for(let i =0; i < nomes.length; i++){
    console.log(nomes[i])
} */

/* É a mesma coisa com o programa de cima mas ele é menor
nomes.forEach((element) =>{
    console.log(element)
})*/
/* O programa mapeia o array e adiciona uma string antes do "element"
nomes.map((element) =>{
    console.log(`Meu lutador é ${element}`)
})*/
/* O programa filtra o que está dentro do array e está pedindo que mostre apenas os personagens que tenham mais de 200 anos*/

nomes.filter((element) =>{
    console.log(element.idade > 200)
})