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

//Create Task


//Create Button
var submitButton = document.createElement('button');
root.appendChild(submitButton)
submitButton.innerText='Submit';

//Button Style

submitButton.style.width= '90%'

submitButton.style.padding= '5px';
submitButton.style.margin= '15px';


//Clear Button

var clearButton = document.createElement('button');

root.appendChild(clearButton);
clearButton.innerText='Clear';

//Clear Button Style

clearButton.style.width= '90%'

clearButton.style.padding= '5px';
clearButton.style.margin= '15px';

clearButton.onclick = () => input.value='';
//func to create task



function TaskCreator(){
        if (input.value===''){
                alert('Please Enter Task')
        }
        else{
                var task = document.createElement('div');
        
                task.classList.add('task')
                var inputResult = document.getElementsByTagName('input')[0].value;
                console.log(inputResult)
                var taskName = document.createTextNode(inputResult);
                task.appendChild(taskName)
                root.appendChild(task)
                var dt = task.style;
                dt.border='2px solid black';
                dt.padding='5px';
                dt.margin = '10px';
                dt.display = 'flex';
                dt.justifyContent = 'SPACE-between';
                input.value='';
                var closeBtn = document.createElement('span');
                closeBtn.classList.add('close');
                closeBtn.innerHTML='&times;';
                closeBtn.style.justifyContent='end'
                task.appendChild(closeBtn);
                closeBtn.onclick = ()=> task.remove();
        }

}

submitButton.onclick=TaskCreator;
input.addEventListener("keydown",(e)=> {
        if(e.isComposing || e.keyCode ===13)TaskCreator()
} );

