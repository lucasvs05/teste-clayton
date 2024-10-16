function showPanel(panelId) {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.style.display = panel.id === panelId ? 'block' : 'none';
    });
}

function exitApp() {
    window.close(); // Ou redirecionar para outra página
}

function visualizarTodasEntregas() {
    alert("Funcionalidade de visualizar todas as entregas ainda não implementada.");
}

function alterarStatusEntrega() {
    const idPedido = prompt("Digite o ID do Pedido:");
    const novoStatus = prompt("Digite o novo status:");
    alert(`Status da entrega com ID ${idPedido} alterado para "${novoStatus}".`);
}

function adicionarNovaEntrega() {
    const idPedido = prompt("Digite o ID do Pedido:");
    const idMotorista = prompt("Digite o ID do Motorista:");
    alert(`Nova entrega adicionada com ID do Pedido: ${idPedido} e ID do Motorista: ${idMotorista}.`);
}

function visualizarEntregasPendentes() {
    alert("Funcionalidade de visualizar entregas pendentes ainda não implementada.");
}
