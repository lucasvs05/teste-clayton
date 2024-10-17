document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    // Simulação de autenticação
    if (autenticarUsuario(username, password)) {
        mostrarEntregas();
    } else {
        message.textContent = 'Usuário ou senha incorretos.';
    }
});

document.getElementById('logout-button').addEventListener('click', function () {
    mostrarLogin();
});

// Função simulada para autenticação
function autenticarUsuario(username, password) {
    return username === 'admin' && password === 'senha'; // Exemplo de autenticação
}

function mostrarEntregas() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('entregas-container').classList.remove('hidden');

    // Adicionando entregas de exemplo
    const entregas = [
        { id: 1, destinatario: 'João Silva', status: 'Entregue' },
        { id: 2, destinatario: 'Maria Oliveira', status: 'Pendente' },
        { id: 3, destinatario: 'Carlos Pereira', status: 'Em trânsito' },
    ];

    const tbody = document.getElementById('entregas-table').querySelector('tbody');
    tbody.innerHTML = ''; // Limpa as entregas anteriores

    entregas.forEach(entrega => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entrega.id}</td>
            <td>${entrega.destinatario}</td>
            <td>${entrega.status}</td>
        `;
        tbody.appendChild(row);
    });
}

function mostrarLogin() {
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('entregas-container').classList.add('hidden');
}
