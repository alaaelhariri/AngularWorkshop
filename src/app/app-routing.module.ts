import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent, DefinitionsComponent } from './components';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'definition/:word', component: DefinitionsComponent },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
