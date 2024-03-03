var root = document.getElementById('root');

//Create Title
var head = document.createElement("h1");
var title = document.createTextNode("Todo App");
head.appendChild(title);
root.appendChild(head);
var hStyle = head.style;
hStyle.display='flex';
hStyle.justifyContent='center';

//Create Input
var input = document.createElement('input');
root.appendChild(input);

//Input Style
input.style.width= '90%';
input.style.padding= '5px';
input.style.margin= '15px';

//Create submitButton
var submitButton = document.createElement('button');
root.appendChild(submitButton)
submitButton.innerText='Submit';

//submitButton Style
submitButton.style.width= '90%'
submitButton.style.padding= '5px';
submitButton.style.margin= '15px';

submitButton.onclick=TaskCreator;
input.addEventListener("keydown",(e)=> {
        if(e.isComposing || e.keyCode ===13)TaskCreator()
} );

// Create ClearLocalStorageButton
var clearButton = document.createElement('button');
root.appendChild(clearButton);
clearButton.innerText='Clear Local Storage';

//ClearLocalStorageButton Style
clearButton.style.width= '90%'
clearButton.style.padding= '5px';
clearButton.style.margin= '15px';

clearButton.onclick = () => localStorage.clear();
//func to create task

function createTask(){
        var task = document.createElement('div'); 
        task.classList.add('task')
        var taskName = document.createTextNode(localStorage.getItem(taskCounter));
        task.appendChild(taskName)
        root.appendChild(task)
        task.setAttribute('id',taskCounter)
        console.log(this.id);

        //taskStyle
        var dt = task.style;
        dt.border='2px solid black';
        dt.padding='5px';
        dt.margin = '10px';
        dt.display = 'flex';
        dt.justifyContent = 'SPACE-between';

        //Create DeleteTaskButton
        var closeBtn = document.createElement('span');
        closeBtn.classList.add('deleteTask');
        closeBtn.setAttribute('id',taskCounter)
        closeBtn.innerHTML='&times;';
        closeBtn.style.justifyContent='end'
        task.appendChild(closeBtn);
        closeBtn.onclick = (e)=> {
                showIt(e);
                task.remove();
        };

}



//TaskCounter which plays as ID for task
let taskCounter=localStorage.getItem('taskCounter') || 1;


//Reload previous task on div
for(let i=0;i<localStorage.length;i++){
        
        //Iterate Task Div
        createTask();
        taskCounter ++ 
}
function showIt(element) {
        var parent = element.parentNode;
        alert(parent.id);
        var content = parent.querySelector("div");
        alert(content.id);
      }
//Create new task
function TaskCreator(){

        let inputResult = document.getElementsByTagName('input')[0].value;
        localStorage.setItem(taskCounter, inputResult);
        input.value='';
        createTask();
        taskCounter ++

} 



