import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { NastavnoLiceComponent } from './nastavno-lice/nastavno-lice.component';
import { PredmetComponent } from './predmet/predmet.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NastavnoLiceComponent,
    PredmetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
