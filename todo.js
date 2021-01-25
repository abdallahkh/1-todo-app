const app ={data(){
	return{
          taskInput : "",
          tasks : [],
    }

    },
    methods:{
        addItem(){
            if(this.taskInput!=""){
            newTask = {
                content : this.taskInput,
                finished : false,
                editingOn : false,
                noteShowing: false ,
                noteContent : ""
            }
            this.tasks.push(newTask)
            this.taskInput=""
            }
        },
        markFinished(item){
            item.finished =! item.finished
        } ,
        removeFinished(){
           let finished = this.tasks.filter(task => task.finished );
           finished.forEach(finishedTask => this.tasks.splice(this.tasks
            .findIndex(e => e.finished === finishedTask.finished),1))
        },
        toggleEditing(item){
            item.editingOn =! item.editingOn ;
            
        }
        
    }
}


Vue.createApp(app).mount("#app")
