import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  newTask: string = ''; // Para almacenar la nueva tarea
  tasks: { name: string; completed: boolean; date: string }[] = []; // Lista de tareas con fecha
  darkMode: boolean = false; // Estado inicial: claro

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          date: task.date || new Date().toLocaleString(), // Asigna fecha si no existe
        }));
      }
    }
  }

  ngOnInit() {
    // Carga el estado del tema desde localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.darkMode = JSON.parse(savedTheme);
    }
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode; // Alterna el estado
    // Guarda el tema en localStorage
    localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
  }

  private saveTasks() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        name: this.newTask.trim(),
        completed: false,
        date: new Date().toLocaleString(), // Fecha y hora actuales
      });
      this.newTask = '';
      this.saveTasks();
    }
  }

  toggleTask(index: number) {
    this.saveTasks();
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasks();
  }

  clearTasks() {
    this.tasks = [];
    this.saveTasks();
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }
}
