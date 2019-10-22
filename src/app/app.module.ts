import { MaterialModule } from './material-module';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


const routes: Routes = [
{ path:"",redirectTo:"login", pathMatch:"full"},
{ path:"login", component: LoginComponent},
{ path:"signup", component: SignupComponent},
{ path:"peliculas", component: PeliculasComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PeliculaComponent,
    PeliculasComponent,
    NavbarComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
