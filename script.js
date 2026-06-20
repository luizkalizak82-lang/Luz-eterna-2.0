
function executarLogin() {
    const nome = document.getElementById('login-nome').value.trim();
    // Lógica original de validação de professores e alunos
    let membros = JSON.parse(localStorage.getItem('bd_membros') || '[]');
    let usuario = membros.find(m => m.nome.toLowerCase() === nome.toLowerCase());

    if (!usuario && ["Luís Gustavo", "Michel"].includes(nome)) {
        usuario = { nome, cargo: "Líder/Professor" };
        membros.push(usuario);
        localStorage.setItem('bd_membros', JSON.stringify(membros));
    }

    if (usuario) {
        localStorage.setItem('usuarioLogado', usuario.nome);
        localStorage.setItem('perfil', usuario.cargo);
        location.reload(); 
    } else {
        alert('Usuário não encontrado.');
    }
}

function navegarPara(id) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById(id).classList.add('ativa');
}
