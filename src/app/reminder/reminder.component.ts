import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reminder',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent {
  newRemainder: { title: string; description: string; dueDate: string } = {
    title: '',
    description: '',
    dueDate: '',
  };
  reminders: { title: string; description: string; dueDate: string }[] = [];

  addRemainder() {
    if (
      this.newRemainder.title &&
      this.newRemainder.description &&
      this.newRemainder.dueDate
    ) {
      this.reminders.push({ ...this.newRemainder });
      this.newRemainder = { title: '', description: '', dueDate: '' };
    }
  }
}
