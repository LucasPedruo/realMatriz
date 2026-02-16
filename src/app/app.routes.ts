import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes')
      .then(m => m.HOME_ROUTES),
  },
  {
    path: 'biografia',
    loadChildren: () => import('./features/biografia/biografia.routes')
      .then(m => m.BIOGRAFIA_ROUTES),
  },
  {
    path: 'projetos',
    loadChildren: () => import('./features/projetos/projetos.routes')
      .then(m => m.PROJETOS_ROUTES),
  }, 
  {
    path: 'setup',
    loadChildren: () => import('./features/setup/setup.routes')
      .then(m => m.SETUP_ROUTES),
  },
  { path: '**', redirectTo: '' },
];
