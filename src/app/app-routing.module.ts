import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'joker',
    loadChildren: () => import('./joker/joker.module').then( m => m.JokerPageModule)
  },
  {
    path: 'pinoquio',
    loadChildren: () => import('./pinoquio/pinoquio.module').then( m => m.PinoquioPageModule)
  },
  {
    path: 'sonic2',
    loadChildren: () => import('./sonic2/sonic2.module').then( m => m.Sonic2PageModule)
  },
  {
    path: 'minions2',
    loadChildren: () => import('./minions2/minions2.module').then( m => m.Minions2PageModule)
  },
  {
    path: 'morbius',
    loadChildren: () => import('./morbius/morbius.module').then( m => m.MorbiusPageModule)
  },
  {
    path: 'o-carinha',
    loadChildren: () => import('./o-carinha/o-carinha.module').then( m => m.OCarinhaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
