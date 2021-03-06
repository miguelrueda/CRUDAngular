import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReadComponent } from './components/read/read.component';
import { HomeComponent } from './components/home/home.component';
import { CreateActorComponent } from './components/actors/create-actor/create-actor.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { ActorsListComponent } from './components/actors/actors-list/actors-list.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { ActorsService } from './services/actors.service';
import { MoviesService } from './services/movies.service';
import { CategoriesService } from './services/categories.service';
import { CountriesService } from './services/countries.service';
import { ReadActorComponent } from './components/actors/read-actor/read-actor.component';
import { ReadMovieComponent } from './components/movies/read-movie/read-movie.component';
import { ReadCategoryComponent } from './components/categories/read-category/read-category.component';
import { TabsContainerComponent } from './components/shared/tabs-container/tabs-container.component';
import { ActorDetailsComponent } from './components/actors/actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscadorComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent,
    DeleteComponent,
    HomeComponent,
    CreateActorComponent,
    CreateMovieComponent,
    CreateCategoryComponent,
    ActorsListComponent,
    MoviesListComponent,
    CategoriesListComponent,
    ReadActorComponent,
    ReadMovieComponent,
    ReadCategoryComponent,
    TabsContainerComponent,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ActorsService,
    MoviesService,
    CategoriesService,
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
