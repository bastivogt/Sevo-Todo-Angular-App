import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sevo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() done!: boolean;

  @Output() doneChange = new EventEmitter();
  @Output() delete = new EventEmitter();

  doneChangeHandler() {
    //console.log('doneChangeHandler', this.id, this.done);
    const evtObj: { id: number; done: boolean } = {
      id: this.id,
      done: this.done,
    };
    this.doneChange.emit(evtObj);
  }

  deleteClickHandler() {
    //console.log('deleteClickHandler');
    this.delete.emit(this.id);
  }
}
