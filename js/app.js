const { createApp } = Vue;

createApp({
    data() {
        return {
            taskName: '',
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


            ],
        }


    },
    methods: {
        addTask(){
            taskToAdd = {
                text: this.taskName,
                done: false
            }
            this.tasks.unshift(taskToAdd)
            this.taskName = ''
        },
        
        
    },
    mounted() {
        
    }
}).mount('#app')