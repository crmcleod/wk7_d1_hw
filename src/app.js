import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: ["Create million dollar app", "Sell app", "Buy remote island"],
            newToDo: ""
        },
        methods: {
            saveNewToDo: function() {
                this.todos.push(
                    this.newToDo
                );
                this.newToDo="";
            }
        }
    })
})