import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginModule } from '../app/login/login.module';
import { DashboardModule } from '../app/dashboard/dashboard.module';
import { UsuarioModule } from '../app/usuario/usuario.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    DashboardModule,
    UsuarioModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
