import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // URL de base pour l'API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer toutes les notes
  getAllNotes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/notes`);
  }

  // Méthode pour créer une nouvelle note
  createNote(note: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/notes`, note);
  }

  // Méthode pour supprimer une note par ID
  deleteNote(noteId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/notes/${noteId}`);
  }
}
