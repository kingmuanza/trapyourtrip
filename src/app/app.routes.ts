import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';

export const appRoutes: Routes = [
    { path: 'accueil', component: AboutComponent },
    { path: '**', redirectTo: 'accueil' }
];
