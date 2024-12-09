import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AuthentificationComponent } from './authentification/authentification.component';

export const routes: Routes = [
  { path: 'posts-liste', component: PostListComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: 'postes-item', component: PostItemComponent },
  { path: '', redirectTo: '/posts-liste', pathMatch: 'full' },  // Redirection vers 'posts-liste'
];

