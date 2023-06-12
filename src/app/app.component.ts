import { Component, OnInit } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /*todos: Todo[] = [
    { id: 1, title: 'Angular lernen', done: false },
    { id: 2, title: 'Typescript lernen', done: false },
    { id: 3, title: 'Training', done: true },
  ];*/
  todos: Todo[] = [];

  title = 'Sevo Todo App';

  todosChanges: boolean = false;

  get todosActive(): Todo[] {
    return this.todos.filter((todo) => !todo.done);
  }

  get todosDone(): Todo[] {
    return this.todos.filter((todo) => todo.done);
  }

  addTodoHandler(todo: string) {
    //console.log('addTodoHandler todo:', todo);
    let maxID = 1;
    if (todo !== '') {
      this.todos.map((item) => {
        if (item.id >= maxID) {
          maxID = item.id + 1;
        }
      });
      this.todos.unshift({ id: maxID, title: todo, done: false });
      this.onChangeTodos();
    }
  }

  changeTodoHandler(event: { id: number; done: boolean }) {
    const index = this.todos.findIndex((item) => item.id === event.id);
    this.todos[index].done = event.done;
    this.onChangeTodos();
  }

  deleteTodoHandler(id: number) {
    //console.log('deleteTodoHandler', id);
    if (window.confirm(`Soll Todo [id: ${id}] wirklich gelöscht werden?`)) {
      const index = this.todos.findIndex((item) => item.id === id);
      this.todos.splice(index, 1);
      this.onChangeTodos();
    }
  }

  //
  saveTodos() {
    window.localStorage.setItem('TODOS', JSON.stringify(this.todos));
  }

  loadTodos() {
    const dataJSON = window.localStorage.getItem('TODOS');
    if (dataJSON != null) this.todos = JSON.parse(dataJSON);
  }

  onChangeTodos() {
    console.log('onChangeTodos');
    this.saveTodos();
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.loadTodos();
  }
}
