import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sevo-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent {
  @Input() title: string = 'Todo hinzufügen';
  @Input() label: string = 'Todo';
  @Input() placeholder: string = 'Todo';
  @Input() buttonTitle: string = 'Todo hinzufügen';

  @Output() addTodo = new EventEmitter();

  todo: string = '';

  addTodoHandler() {
    this.addTodo.emit(this.todo);
    this.todo = '';
  }
}
