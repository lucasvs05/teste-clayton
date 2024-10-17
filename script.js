document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulação de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifique as credenciais (este é um exemplo simples)
    if (username === 'admin' && password === 'senha123') {
        alert('Login bem-sucedido!');
        // Aqui você pode carregar e mostrar as entregas
        document.getElementById('entregasContainer').style.display = 'block';
        mostrarEntregas();
    } else {
        alert('Usuário ou senha inválidos!');
    }
});

function mostrarEntregas() {
    const entregas = [
        { id: 1, status: 'Pendente' },
        { id: 2, status: 'Concluída' },
        { id: 3, status: 'Em Andamento' }
    ];
    const entregasList = document.getElementById('entregasList');
    entregas.forEach(entrega => {
        const div = document.createElement('div');
        div.textContent = `Entrega ID: ${entrega.id}, Status: ${entrega.status}`;
        entregasList.appendChild(div);
    });
}
