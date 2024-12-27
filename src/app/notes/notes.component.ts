import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  standalone: true,
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  imports: [NgFor, FormsModule],
})
export class NotesComponent {
  notes: string[] = [];
  newNote: string = '';

  addNote() {
    if (this.newNote.trim()) {
      this.notes.push(this.newNote.trim());
      this.newNote = '';
    }
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }
}
