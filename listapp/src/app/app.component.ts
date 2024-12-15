import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component'; // Importa tu componente

@Component({
  selector: 'app-root',
  standalone: true, // Esto indica que es un componente independiente
  imports: [TaskListComponent], // Asegúrate de agregar aquí tu componente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'listapp';
}
