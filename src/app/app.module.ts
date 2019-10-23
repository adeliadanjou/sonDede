import { MaterialModule } from "./material-module";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PeliculaComponent } from "./pelicula/pelicula.component";
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { SeriesComponent } from "./series/series.component";
import { HttpModule } from "@angular/http";
import { PeliculasPopularesComponent } from "./peliculas/peliculas-populares/peliculas-populares.component";
import { PeliculasMejoresComponent } from './peliculas/peliculas-mejores/peliculas-mejores.component';
import { PeliculasGuardadasComponent } from './peliculas/peliculas-guardadas/peliculas-guardadas.component';
import { SeriesGuardadasComponent } from './series/series-guardadas/series-guardadas.component';
import { SeriesMejoresComponent } from './series/series-mejores/series-mejores.component';
import { SeriesPopularesComponent } from './series/series-populares/series-populares.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "peliculas", component: PeliculasComponent,
    children: [
      { path: "populares", component: PeliculasPopularesComponent },
      { path: "mejores", component: PeliculasMejoresComponent },
      { path: "guardadas", component: PeliculasGuardadasComponent },
    ]
  },
  { path: "series", component: SeriesComponent, 
   children: [
    { path: "populares", component: SeriesPopularesComponent },
    { path: "mejores", component: SeriesMejoresComponent },
    { path: "guardadas", component: SeriesGuardadasComponent },

  ] }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PeliculaComponent,
    PeliculasComponent,
    NavbarComponent,
    SeriesComponent,
    PeliculasPopularesComponent,
    PeliculasMejoresComponent,
    PeliculasGuardadasComponent,
    SeriesGuardadasComponent,
    SeriesMejoresComponent,
    SeriesPopularesComponent
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
    MatListModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
