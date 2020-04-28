var listElement = document.getElementById('taskList');
var inputElement = document.getElementById('inputTask');
var buttonElement = document.getElementById('bttnAdd');

//var tasks = ["Tarefa 1","Tarefa 2","Tarefa 3"];
var tasks = JSON.parse(localStorage.getItem('taskList')) || [];

function renderTasks (){
    listElement.innerHTML = '';

    for (task of tasks){
        var taskElement = document.createElement('li');
        var taskText = document.createTextNode(task);
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        linkElement.setAttribute('href','#');
        
        var pos = tasks.indexOf(task);
        linkElement.setAttribute('onclick', 'removeTask('+pos+')');

        linkElement.appendChild(linkText);
        taskElement.appendChild(taskText);
        taskElement.appendChild(linkElement);
        listElement.appendChild(taskElement);
    };
};

renderTasks();

function addTask (){
    var taskValue = inputElement.value;
    
    tasks.push(taskValue);
    inputElement.value = '';
    renderTasks();
    saveToStorage();
};

buttonElement.onclick = addTask;

function removeTask(pos){
    tasks.splice(pos,1);
    renderTasks();
    saveToStorage();
};

function saveToStorage () {
    localStorage.setItem('taskList', JSON.stringify(tasks));
};