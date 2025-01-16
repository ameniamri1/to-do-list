import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Démarrer l'application avec AppComponent
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Fournir HttpClientModule ici pour les requêtes HTTP
  ],
}).catch((err) => console.error(err));
