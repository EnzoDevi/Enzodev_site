const date = document.getElementById('data')
const ress = document.getElementById('res')

function enviar(){
    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    
    
    if(!date.value){
        alert('Por favor, selecione uma data válida')
        return
    }
    const dataSelecionada = new Date(`${date.value}T12:00:00`)
    dataFormatada = dataSelecionada.toLocaleDateString('pt-BR')
    
    
    const email = document.getElementById('email').value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)){
        alert('Adicione um e-mail válido')
        return
    }
    
    const dadosFormulario = new FormData()
    dadosFormulario.append('nome',nome)
    dadosFormulario.append('data',dataFormatada)
    dadosFormulario.append('email',email)
    dadosFormulario.append('mensagem',mensagem)
    

    const urlDestino = 'https://script.google.com/macros/s/AKfycbw_WUiriy9yIEMIB81Px1lB9zayqlRi-vyQSkrA3HH7gcNsai1GDECpdmSJwRJv-vlEKQ/exec'; 

    fetch(urlDestino, {
        method: 'POST', // Usamos o método POST para enviar os dados
        body: dadosFormulario
    })
    .then(response => {
        if (!response.ok){
            throw new Error('Erro na resposta da rede: ${response.status} - ${response.statusText}')
        }
        return response.json()
    })

    .then(data => {
        console.log('Sucesso:', data);
        alert('Formulário enviado com sucesso!');
        // Aqui você pode resetar o formulário ou fazer outra coisa
    })
    .catch((error) => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário.');
    });

    ress.innerHTML = `${nome}, ${dataFormatada}, ${email}, ${mensagem}`
}