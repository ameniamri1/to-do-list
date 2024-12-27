import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  isEditing?: boolean;
  categoryId?: number;
}
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todoList: TodoItem[] = [];
  @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;
  categories = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Personal' },
    { id: 3, name: 'Other' },
  ];

  ngOnInit(): void {
    //const storedData = localStorage.getItem('todoList');
    //if (storedData) {
    // this.todoList = JSON.parse(storedData);
    //}
  }

  addTask(task: string, categoryId: string): void {
    // Convertir categoryId en entier et vérifier s'il est valide
    const parsedCategoryId = Number(categoryId);
    if (
      task.trim() &&
      Number.isInteger(parsedCategoryId) &&
      parsedCategoryId > 0
    ) {
      const newTask: TodoItem = {
        id: this.todoList.length + 1,
        task,
        completed: false,
        categoryId: parsedCategoryId,
      };

      this.todoList.push(newTask);
      this.saveTodoList();

      // Réinitialiser le champ de la tâche après ajout
      task = '';
    } else {
      console.error('Invalid task or categoryId.');
    }
  }

  deleteTask(id: number): void {
    this.todoList = this.todoList.filter((item) => item.id !== id);
    this.saveTodoList();
  }

  isEditing(id: number): boolean {
    return this.todoList.some((todo) => todo.id === id && todo.isEditing);
  }

  toggleEditing(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.isEditing = !todoItem.isEditing;
      this.saveTodoList();
    }
  }

  toggleCompleted(id: number): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.completed = !todoItem.completed;
      this.saveTodoList();
    }
  }

  updateTask(id: number, newTask: string): void {
    const todoItem = this.todoList.find((item) => item.id === id);
    if (todoItem) {
      todoItem.task = newTask.trim();
      todoItem.isEditing = false;
      this.saveTodoList();
    }
  }

  saveTodoList(): void {
    //localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
