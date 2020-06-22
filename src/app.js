import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {task: "Create million dollar app", priority: "high"},
                {task: "Sell app", priority: "high"},
                {task: "Buy remote island", priority: "high"}
            ],
            newToDo: "",
            priority: "",
        },
        methods: {
            saveNewToDo: function() {
                this.todos.push({
                    task: this.newToDo,
                    priority: this.priority});
                this.newToDo="";
                this.priority="";
            }
        }
    })
})