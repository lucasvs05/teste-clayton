// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de usuários
    const users = {
        admin: { password: "Admin", role: "admin" },
        funcionario: { password: "funcionario", role: "funcionario" }
    };

    if (users[username] && users[username].password === password) {
        // Redireciona para a tela apropriada
        if (users[username].role === "admin") {
            window.location.href = "admin.html"; // página para admin
        } else {
            window.location.href = "funcionario.html"; // página para funcionário
        }
    } else {
        document.getElementById("error").innerText = "Usuário ou senha inválidos!";
    }
});
