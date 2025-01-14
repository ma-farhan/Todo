<template>
  <h1>Todo List</h1>


  <div class="input-container">
    <input type="text" v-model="newTask" placeholder="Add new task..." id="input"/>
    <button @click="addTask" id="clearButton">Add</button>
  </div>
<br>
  <div class="output-container">
  <div class="filters">
    <button @click="setFilter('all')">All</button>
    <button @click="setFilter('active')">Active</button>
    <button @click="setFilter('completed')">Completed</button>
  </div>

  
  
  <div v-for="(task, index) in todoStore.filteredTasks" :key="index">
    <p :class="{ 'completed-task': task.completed }">
      {{ task.text }}
      <button @click="completeTask(index)" class="btn">
        {{ task.completed ? 'Undo' : 'Complete' }}
      </button>
      <button @click="editTask(index)" class="btn">Edit</button>
      <button @click="removeTask(index)" class="btn">Delete</button>
    </p>
  </div>
</div>

</template>

  
  <script setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';  

const todoStore = useTodoStore();

const newTask = ref('');  

const addTask = () => {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value);
    newTask.value = '';
  }
};

const setFilter = (filterType) => {
  todoStore.filterTasks(filterType);
};


const completeTask = (index) => todoStore.completeTask(index);
const editTask = (index) => {
  const updatedText = prompt('Edit task:', todoStore.tasks[index].text);
  if (updatedText) {
    todoStore.editTask(index, updatedText);
  }
};
const removeTask = (index) => todoStore.removeTask(index);
</script>

  
  <style scoped>

.input-container {
   position: relative;
   width: 100%;
   max-width: 1000px;
   
 }
  #textInput {
   width: 300px;
   height: 35px;
   justify-content: center;
   align-items: center;
   padding-right: 40px;
   padding: 10px;
   box-sizing: border-box;
   border-radius: 20px;
   background-color: white;
   color: black;
   

 }
  #clearButton {
   position: absolute;
   top: 50%;
   right: 10px;
   transform: translateY(-50%);
   background-color: rgb(100, 7, 223);
   color: black;
   border: none;
   cursor: pointer;
   padding: 5px 10px;
   z-index: 1;
 }

 #input{
height: 35px;
width: 100%;

 }

  #clearButton:hover {
   background-color: rgb(75, 5, 168);
 }
  .output-container {
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: blue;
 width: 100%; 
 max-width: 1200px; 
 height: auto;
 color: white;
 padding: 20px;
 margin: 0 auto; 
 border-radius: 10px;
 flex-wrap:wrap;
}


  button {
   background-color: blue;
   border: 1px solid white;
   color: white;
   cursor: pointer;
   padding: 5px 10px;
   margin-left: 5px;
   border-radius: 5px;
 }
  button:hover {
   background-color: red;
 }
  p {
 width: 100%;
 max-width: 600px; 
 background-color: blueviolet;
 padding: 10px;
 margin: 10px 0;
 color: white;
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 border-radius: 10px;
 flex-wrap: wrap; 
 box-sizing: border-box;
 word-break: break-word; 
}


.task-text {
 flex: 1; 
 margin-right: 10px;
 word-break: break-word; 
}


.button-group {
 display: flex;
 flex-wrap: wrap;
 gap: 5px; 
}


.button-group button {
 padding: 5px 10px;
 max-width: 80px;
 font-size: 12px;
 background-color: blue;
 border: 1px solid white;
 color: white;
 border-radius: 5px;
 cursor: pointer;
 flex-shrink: 0; 
}


.button-group button:hover {
 background-color: red;
}
  .completed-task {
   text-decoration: line-through;
   background-color: blueviolet;
 }


 .btn{
   background-color: blueviolet;
   color: white;
   border: 1px solid white;
 }

  </style>
  