import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPosts() {
    return [
      { id: '1', titre: 'Premier post', contenu: 'Détails post 1' },
      { id: '2', titre: 'Deuxième post', contenu: 'Détails post 2' },
      { id: '3', titre: 'Troisième post', contenu: 'Détails post 3' },
      { id: '4', titre: ' Quatrième post', contenu: 'Détails post 4' },
    ];
  }

  constructor() {}
  
}
