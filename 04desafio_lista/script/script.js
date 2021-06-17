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

// CARREGAR E IMPRIMIR A LISTA SALVA
onload = function(){
    let ol = localStorage.getItem("taskList")
    let ola = JSON.parse(ol)
    if (ola != null) {
        tasks = ola
        console.log(ola)
        ola.forEach(e => {
            tl.innerHTML += "<li class='taskline'>" + e + "</li>"
        }); 
    }
}

// ADICIONAR ITEM A LISTA
function addTask() {

    let ntask = document.getElementById("taskentry").value 
    console.log(ntask)
    if (ntask != "") {
    tasks.push(ntask) 
    console.log(tasks)
    var index = tasks.indexOf(tasks[tasks.length - 1]);
    tl.innerHTML += "<li class='taskline'>" + tasks[tasks.length - 1] + "</li>"
    saveList(tasks)  
    console.log(index) 
    } else {
        alert("Insira uma tarefa.")
    }
}

   

// DELETAR ITEM DA LISTA
function delTask(id) {

    tasks.pop()
    tl.innerHTML = "" 
    for (let i = 0; i < tasks.length; i++) {
        tl.innerHTML += "<li class='taskline'>" + tasks[i] + "</li>"
    }
    console.log(tasks)
    saveList(tasks)
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