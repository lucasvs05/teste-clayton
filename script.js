// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulação de login
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verifique as credenciais
    if (username === 'admin' && password === 'Admin') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('admin').style.display = 'block'; // Mostra o painel do administrador
        document.getElementById('funcionario').style.display = 'none'; // Garante que o painel do funcionário esteja escondido
    } else if (username === 'funcionario' && password === 'funcionario') {
        document.getElementById('loginContainer').style.display = 'none'; // Esconde o formulário de login
        document.getElementById('funcionario').style.display = 'block'; // Mostra o painel do funcionário
        document.getElementById('admin').style.display = 'none'; // Garante que o painel do administrador esteja escondido
    } else {
        document.getElementById('loginMessage').textContent = 'Usuário ou senha inválidos!';
    }
});

// Função para visualizar todas as entregas (apenas um exemplo)
function visualizarTodasEntregas() {
    alert('Exibindo todas as entregas...');
    // Aqui você pode adicionar lógica para mostrar as entregas
}

// Função para alterar o status da entrega
function alterarStatusEntrega() {
    alert('Alterando o status da entrega...');
    // Aqui você pode adicionar lógica para alterar o status
}

// Função para adicionar nova entrega
function adicionarNovaEntrega() {
    alert('Adicionando nova entrega...');
    // Aqui você pode adicionar lógica para adicionar nova entrega
}

// Função para visualizar entregas pendentes
function visualizarEntregasPendentes() {
    alert('Exibindo entregas pendentes...');
    // Aqui você pode adicionar lógica para visualizar entregas pendentes
}

// Função de logout
function logout() {
    document.getElementById('loginContainer').style.display = 'block'; // Mostra o formulário de login
    document.getElementById('funcionario').style.display = 'none'; // Esconde o painel do funcionário
    document.getElementById('admin').style.display = 'none'; // Esconde o painel do administrador
    document.getElementById('username').value = ''; // Limpa o campo de usuário
    document.getElementById('password').value = ''; // Limpa o campo de senha
    document.getElementById('loginMessage').textContent = ''; // Limpa a mensagem de erro
}
