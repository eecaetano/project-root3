// Função para carregar o arquivo JSON
async function loadJSON() {
    const response = await fetch('/ra.json');
    const data = await response.json();
    return data;
}

document.getElementById('verificationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const classGroup = document.getElementById('class').value;
    const result = document.getElementById('result');

    const directory = await loadJSON();

    const user = directory.ra.find(user => user["NOME COMPLETO"] === name && user["SÉRIE"] === grade && user["TURMA"] === classGroup);

    if (user) {
        result.textContent = `Número de Registro Acadêmico: ${user["NÚMERO DO REGISTRO"]}`;
    } else {
        result.textContent = 'Informações não encontradas ou incompatíveis';
        result.textContent = 'VERIFIQUE OS DADOS INFORMADOS E TENTE NOVAMENTE.'
    }
});
