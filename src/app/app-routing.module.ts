import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { NastavnoLiceComponent } from './nastavno-lice/nastavno-lice.component';
import { PredmetComponent } from './predmet/predmet.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'nastavnoLice', component: NastavnoLiceComponent },
  { path: 'predmet/:name', component: PredmetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
