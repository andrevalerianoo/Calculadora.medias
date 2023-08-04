const form = document.getElementById('form-atividade');
const imgaprovado = '<img src="./aprovado.png" alt="Emoji celebrando"/>';
const imgreprovado = '<img src="./reprovado.png" alt="Emoji triste"/>' ;
const atividades = [];
const notas = [];
const spanAprovado = '<span class= "resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class= "resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

let linhas = '';

form.addEventListener('submit', function(e){
e.preventDefault();

adicionalinha();
atualizatabela();
resultadomedias();

});

function adicionalinha(){
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputnomeatividade)){
        alert(`A atividade ${inputnomeatividade} já foi inserida`);
    }else{
        atividades.push(inputnomeatividade.value);
        notas.push(parseFloat(inputnotaatividade.value));
        
        let linha = '<tr>';
        linha += `<td>${inputnomeatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value >= notaMinima ? imgaprovado : imgreprovado}</td>`;
        linha += '</tr>'
        
        linhas += linha;
    }
    
    inputnomeatividade.value ='';
    inputnotaatividade.value ='';

}

function atualizatabela(){

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}

function resultadomedias(){
const mediafinal = notafinal();

document.getElementById('media-final-valor').innerHTML = mediafinal;
document.getElementById('media-final-resultado').innerHTML = mediafinal >=7 ? spanAprovado : spanReprovado;

    
}

function notafinal(){
    let somaDasnotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasnotas += notas[i];
    }

    return somaDasnotas / notas.length;
}