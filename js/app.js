const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: {
                text:'',
                done: false
            },
            tasks: [
                {
                    text: 'Fare la spesa',
                    done: false
                },
                {
                    text: 'Fare la lavatrice',
                    done: true

                },
                {
                    text: 'Pulire la stanza',
                    done: true

                },
                {
                    text: 'Pulire i piatti',
                    done: false

                },


            ]
        }


    },
    methods: {
        addTask(){
            this.tasks.unshift(this.newTask)
            console.log(this.tasks)
        },
        taskStatus(){
            if (this.tasks.done === true){
                return 'task-done'
            }
        }
    },
    mounted() {
        console.log('hello')
    }
}).mount('#app')