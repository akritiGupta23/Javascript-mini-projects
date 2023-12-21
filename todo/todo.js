var toDoApp=(function(){
    let tasks = [];
    var a=10;
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');
    async function getToDos(){
        try {
            
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data =   await response.json();
        tasks=data.slice(0,10);
        renderList();

        } catch(error) {
            console.log("error",error);
        }
        

        
    }

    function addTaskToDom(task){
        const li=document.createElement('li');
        li.innerHTML=`
            <input type="checkbox" id="${task.id}" ${task.completed? 'checked': ''} class="custom-checkbox">
            <label for="${task.id}">${task.title}</label>
            <img src="delete.png" class="delete" data-id="${task.id}" />
            `
        taskList.append(li);

    }
    function renderList () {
        taskList.innerHTML="";
        for(let i=0;i<tasks.length;i++){
            addTaskToDom(tasks[i]);
        }
        tasksCounter.innerHTML=tasks.length;
        
    

    }

    function markTaskAsComplete (taskId) {
        for(let task of tasks){

            if(task.id==taskId){
                
                task.completed=!task.completed;
                renderList();
                showNotification("Task toggled successfully");
                return;
            }
        }
        
        showNotification("Could not toggle the task");
        
    }

    function deleteTask (taskId) {
        const newTasks=tasks.filter(function(task){
            return task.id!=taskId;
        });
        tasks=newTasks;
        renderList();
        showNotification("Task deleted successfully!");

    }

    function addTask (task) {
        if(task){
            tasks.push(task);
            renderList();
            showNotification("Task added successfully!");
            return;

        }
        showNotification("Task cannot be added.");
        return;
        
    }

    function showNotification(text) {
        alert(text);
    }
    function handleInputKeyPress(e){
    if(e.key=='Enter'){
            const text=e.target.value;
        
            if(!text){
                showNotification("Task text cannot be empty.");
                return;
            }

            const task ={
                title:text,
                id:Date.now().toString(),
                completed:false
            }
            e.target.value="";
            addTask(task);
    }
    }
    function handleClickListener(e){
        const target=e.target;

        if(target.className=='delete'){
        
            const taskId=target.dataset.id;
        
            deleteTask(taskId);

        }else if(target.className=='custom-checkbox'){
            const taskId=target.id;
        
            markTaskAsComplete(taskId);

        }

    }
    function initializeApp(){
        getToDos();
        addTaskInput.addEventListener('keyup',handleInputKeyPress);
        document.addEventListener('click',handleClickListener);

    }
    return {
        initialize:initializeApp,
        a:a
    }
    

})();



// let requiredData=[];
// function renderData(){
//     for(let post of requiredData){
//         console.log("title",post.title);
//         console.log("body",post.body);
//     }
// }
// async function fetchPosts() {
//     // Write logic here
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data=await response.json();
//     requiredData=data.slice(0,10);
//     renderData();
        
        
        
//     }catch(error){
//         console.log(error);
//     }
    
    
// }
  
// fetchPosts();