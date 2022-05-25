import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public item: string ="";

  constructor() { }

  ngOnInit(): void {
  }
  public submitItemTaskList(){
    this.item =this.item.trim();
    if(this.item){
      this.emitItemTaskList.emit(this.item);
      this.item =""
    }

  }

}
