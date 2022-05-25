import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList>= JSON.parse(localStorage.getItem("list") || '[]');
  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorage();
    }

  public deleteItem(event:number){
    this.taskList.splice(event,1)
  }
  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first,last)=> Number(first.checked)-Number(last.checked))
      localStorage.setItem("list",JSON.stringify(this.taskList  ))
    }
  }

  public deleteAll(){
    const confirm = window.confirm("Deseja realmente deletar todos os itens?")
    if(confirm){
      this.taskList = [];
    }

  }

  public setEmitTaskList(event:string){
    this.taskList.push({task:event,checked:false})
  }

  public validationInput(event:string, index:number){
    if(!event.length){
    const confirm = window.confirm("Tarefa está vazia,deseja deletar ?");

    if(confirm){
      this.deleteItem(index)
    }
  }



  }
}
