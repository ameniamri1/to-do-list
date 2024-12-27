import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PhotoComponent } from './photo/photo.component';
import { NotesComponent } from './notes/notes.component';
import { RealTimeClockComponent } from './real-time-clock/real-time-clock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    /*
    TodoListComponent,
    
    RealTimeClockComponent*/
    PhotoComponent,

    WishlistComponent,
    ReminderComponent,

    NotesComponent,
    TodoListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo-list-project';
}

