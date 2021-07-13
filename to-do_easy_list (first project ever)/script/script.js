// adicionar itens numa lista --- FEITO
// excluir item da lista --- FEITO
// limpar lista --- FEITO
// exibir lista na tela ao add, del ou clear  --- FEITO
// salvar lista no local storage --- FEITO
// resgatar lista salva no reload --- FEITO
// exibir lista salva na tela --- FEITO

// VARIÁVEIS UNIVERSAIS
let tasks = []
let tl = document.getElementById("taskList")
console.log(tasks)

// GERAR ID ALEATÓRIA
function randomID(){
    return Math.random() * 50
}

// CARREGAR E IMPRIMIR A LISTA SALVA
onload = function(){
    let ol = localStorage.getItem("taskList")
    let ola = JSON.parse(ol)
    if (ola != null) {
        tasks = ola
        ola.forEach((e) => {
            tl.innerHTML += `<li class='tasklike'> ${e.conteudo} <button id='deltask' onlick=delTask(${e.id})>del</button></li>`
        }); 
    }
}

// ADICIONAR ITEM A LISTA
function addTask() {
    let ntask = document.getElementById("taskentry").value 
    if (ntask != "") {
        let new_id = randomID()
        tasks.push({ conteudo: ntask, id: new_id }) 
        tl.innerHTML += `<li class='taskline'> ${tasks[tasks.length - 1].conteudo} <button id='deltask' onclick=delTask(${new_id})>del</button></li>`
        saveList(tasks)
        document.getElementById("taskentry").value = ""
    } else {  alert("Insira uma tarefa.")  } }

// DELETAR ITEM DA LISTA
function delTask(id) {
    itens = JSON.parse(localStorage.getItem("tasklist"))
    new_list = []
    for (let i = 0; i < itens.length; i++){
        if (id != itens[i].id) {
            new_list.push(itens[i]) } }
    saveList(new_list)
    location.reload()
}

// LIMPAR LISTA
function clearTask() {

    let clear = confirm("Deseja limpar sua lista?")
    if (clear == true) {
        tasks.length = 0
        tl.innerHTML = ""
        console.log(tasks)
    } 
    localStorage.clear("taskList")   
}


function saveList(e) {
    localStorage.setItem("taskList", JSON.stringify(e))
    console.log("lista salva" + e)
}