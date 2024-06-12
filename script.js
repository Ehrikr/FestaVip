function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosLuizClaudio = ['Eric', 'Rebeka', 'Wendell', 'Aline', 'Jonathan', 'Julio', 'Camará']
    if (ConvidadosLuizClaudio.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    } else { 
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
    }
}