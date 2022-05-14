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
      active: true,
      route: '/home'
   },
   {
      title: 'Usuários',
      icon: 'account_circle',
      active: true,
      route: '/users'
   },
   {
      title: 'Eventos',
      icon: 'event',
      active: true,
      route: '/events'
   },
   {
      title: 'Inscrições',
      icon: 'confirmation_number',
      active: true,
      route: '/enrollments'
   },
   {
      title: 'Kids',
      icon: 'child_care',
      active: false,
      route: '/kids'
   },
   {
      title: 'Delivery',
      icon: 'lunch_dining',
      active: false,
      route: '/delivery'
   }
  ];
}
