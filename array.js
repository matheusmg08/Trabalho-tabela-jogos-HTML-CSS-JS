var itens = [];
abrir ();
function inserir(){
    var nome = document.getElementById("nome");
    var genero = document.getElementById("genero");
    var dificuldade = document.getElementById("dificuldade");
    var console = document.getElementById("console");
    var online = document.getElementById("online");
    var jogos = {}; //cria um novo Objeto
    jogos.nome = nome.value;
    jogos.genero = genero.value;
    jogos.dificuldade = dificuldade.value;
    jogos.console = console.value;
    jogos.online = online.value;
    itens.push(jogos);
    salvar();
    //limpa o input após adicionar o item
    nome.value = "";
    genero.value = "";
    dificuldade.value = "";
    console.value = "";
    online.value = "";
    //coloca o foco do cursor no campo
    nome.focus();
    salvar();

}
function listar(){
    var tab = document.getElementById("tabela");
    tab.innerHTML = ""; //limpa a tabela
    //monta a linha de título da tabela
    tab.innerHTML = "<th>Nome</th><th>Genero</th><th>Dificuldade</th><th>Console</th><th>Online</th><th>Excluir</th>";

    for (var i in itens){
        tab.innerHTML += "<tr><td>" 
        + itens[i].nome
        + "</td><td>"
        + itens[i].genero
        + "</td><td>"
        + itens[i].dificuldade
        +"</td><td>"
        + itens[i].console
        + "</td><td>"
        + itens[i].online
        + "</td><td>"
        + "<a href='#' class='x' onclick='excluir("+i+")'>X</a>" 
        + "</td></tr>"
    }
    salvar();
    

}
function excluir(i){
    itens.splice(i,1);
    salvar();
    listar();
}
function salvar(){
    //converte os dados em uma String JSON
    var dados = JSON.stringify(itens);
    //salva os dados no localstorage
    localStorage.setItem("dados", dados);
    
}
function abrir(){
    //lê os dados do localStorage
    var dados = localStorage.getItem("dados");
    //converte a String JSON em vetor novamente
    itens = JSON.parse(dados);
    //recarrega os dados
    listar();

}