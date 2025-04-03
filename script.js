// 1) 
function calcularLitros() {
    let precoLitro = parseFloat(prompt("Digite o preço do litro de combustível: "));
    let valorAbastecido = parseFloat(prompt("Quanto quer gastar para abastecer?: "));
    let litros = valorAbastecido / precoLitro;
    alert(`Abasteceu ${litros.toFixed(2)} litros.`);
}

// 2) 
function calcularConsumo() {
    let kmInicial = parseFloat(prompt("Digite o KM inicial: "));
    let kmFinal = parseFloat(prompt("Digite o KM final: "));
    if (kmFinal < kmInicial) {
        alert("Erro: O KM final não pode ser menor que o KM inicial.");
        return;
    }
    let litrosGastos = parseFloat(prompt("Digite a quantidade de litros gastos: "));
    let consumoMedio = (kmFinal - kmInicial) / litrosGastos;
    alert(`O consumo médio do veículo é ${consumoMedio.toFixed(2)} km/l.`);
}

// 3)
function calcularNovoSalario() {
    let salarioAtual = parseFloat(prompt("Digite o salário atual: "));
    if (salarioAtual < 0) {
        alert("Erro: O salário não pode ser negativo.");
        return;
    }
    let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%): "));
    let novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100);
    alert(`O novo salário será de R$ ${novoSalario.toFixed(2)}.`);
}

// 4)
function verificarLetra() {
    let letra = prompt("Digite uma letra: ").toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(letra)) {
        alert("A letra digitada é uma vogal.");
    } else if (letra.match(/[a-z]/)) {
        alert("A letra digitada é uma consoante.");
    } else {
        alert("Caractere inválido. Digite apenas uma letra.");
    }
}

// 5)
function calcularMediaAluno() {
    let nota1 = parseFloat(prompt("Digite a primeira nota: "));
    if (nota1 < 0 || nota1 > 10) {
        alert("Erro: A nota deve estar entre 0 e 10.");
        return;
    }
    let nota2 = parseFloat(prompt("Digite a segunda nota: "));
    if (nota2 < 0 || nota2 > 10) {
        alert("Erro: A nota deve estar entre 0 e 10.");
        return;
    }
    let media = (nota1 + nota2) / 2;
    
    if (media >= 7) {
        alert(`Média: ${media.toFixed(2)} - Aprovado!`);
    } else if (media >= 4) {
        alert(`Média: ${media.toFixed(2)} - Prova Final.`);
    } else {
        alert(`Média: ${media.toFixed(2)} - Reprovado.`);
    }
}
