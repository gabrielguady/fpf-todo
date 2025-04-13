import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatList, MatListItem} from '@angular/material/list';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,
    CommonModule,
    MatList,
    MatListItem,
    MatCheckbox,
    MatLabel,
    MatFormField,
    MatButton,
    MatInput,
    MatIcon,
    MatFabButton,
    MatCard,
    MatCardHeader,
    MatCardContent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {
  items: { id: number, name: string, done: boolean }[] = [];
  id: number = 1;
  taskInput: string = '';
  tasks = [
    { name: 'Estudar Angular', status: 'todo' },
    { name: 'Criar layout', status: 'doing' },
    { name: 'Subir projeto no Git', status: 'done' },
  ];


  addItem = () => {
    this.items.push({
      id: this.id,
      name: this.taskInput,
      done: false
    })

    this.taskInput = ''

    this.id++
  }

  getItems(done: boolean) {
    return this.items.filter(item => item.done === done);
  }

  setDone = (id: number) => {
    const index = this.items.findIndex(item => item.id === id);


    if (index !== -1) {
      const currentState = this.items[index].done;

      this.items[index].done = !currentState;
    }
  }
  protected readonly Array = Array;
}
