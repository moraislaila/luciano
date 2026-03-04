let participantes = []

function lista() {

    const lista = document.getElementById('listaNomes')
    lista.innerHTML
    for (let item of participantes) {
        const li = document.createElement('li')


        let texto = item.nome;
        if (participantes.sorteado) {
            texto += `tirou: ${item.sorteado}`;
        }
        li.textContent = texto;
        listaHtml.appendChild(li);
    }
}

function adicionar() {
    const nome = document.getElementById("nome")
    const nomes = nome.value
    if (nomes === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    const novoParticipante = {
        nomes: nome,
        sorteado: null
    };
    participantes.push(novoParticipante);
    nome.value = "";
    lista()

}

function sorteio() {

    if (participantes.length < 3) {
        alert("Adicione pelo menos 3 participantes.");
        return;
    }
    let nomes = participantes.map(p => p.nome);


    nomes.sort(() => Math.random() - 0.5);

    
}
  


    // let listaSorteados = [];


//     listaSorteados = participantes.map(p => p.nomes);

//     sorteio = true;
//     for (let i = 0; i < participantes.length; i++) {
//         if (participantes[i].nome === listaSorteados[i]) {
//             sorteioValido = false;
//             break;
//         }
//     }
// }