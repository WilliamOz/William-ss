document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const status = "OK";  // Status inicial de consulta marcada

    // Validação do CPF
    if (!validarCPF(cpf)) {
        alert('CPF inválido! Por favor, insira um CPF válido.');
        return;
    }

    const formattedCPF = formatarCPF(cpf);

    const appointment = {
        name: name,
        cpf: formattedCPF,
        email: email,
        date: date,
        time: time,
        status: status
    };

    // Restante do código para enviar os dados para o servidor...
});

// Função para validar o CPF
function validarCPF(cpf) {
    // Implementação da validação do CPF...
}

// Função para formatar o CPF (adiciona pontuações)
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após os 3 primeiros dígitos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona ponto após os 3 segundos dígitos
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona hífen após os próximos 3 dígitos
    return cpf;
}
