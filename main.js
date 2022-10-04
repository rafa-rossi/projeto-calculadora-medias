const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji comemorando">`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji decepcionado">`;

const notas = [];
const atividades = [];

const msgAprovado = `<td><span class="resultado aprovado">Aprovado</span></td>`;
const msgReprovado = `<td><span class="resultado reprovado">Reprovado</span></td>`;

const notaMinima = parseFloat(prompt('Qual a nota minima?'));

let linhas = ``;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attTabela();
    calculaMedia();
    attMedia();
});

function addLinha() {
    const nomeAtividade = document.getElementById('inputNomeAtividade');
    const notaAtividade = document.getElementById('inputNotaAtividade');

    if (atividades.includes(nomeAtividade.value)) {
        alert(`Atividade: ${nomeAtividade}, já foi inserida.`)
    } else {
        let linha = `<tr>`;
        linha += `<td>${nomeAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value}</td>`;
        linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        notas.push(parseFloat(notaAtividade.value));
        atividades.push(nomeAtividade.value);

        linhas += linha;
    }

    nomeAtividade.value = '';
    notaAtividade.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function attMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('nota-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('nota-final-resultado').innerHTML = mediaFinal >= notaMinima ? msgAprovado : msgReprovado;
}

function calculaMedia() {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}

