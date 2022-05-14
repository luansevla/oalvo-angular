import { Component } from '@angular/core';
import { NavRoutes } from './shared/models/navRoutes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(){}

  title = 'petshop-angular';
  routes: Array<NavRoutes> = [
    {
      title: 'Início',
      icon: 'home',
      active: true
   },
   {
      title: 'Usuários',
      icon: 'account_circle',
      active: true
   },
   {
      title: 'Eventos',
      icon: 'event',
      active: true
   },
   {
      title: 'Inscrições',
      icon: 'confirmation_number',
      active: true
   }
  ];
}
