import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { ReadActorComponent } from './components/actors/read-actor/read-actor.component';
import { CreateActorComponent } from './components/actors/create-actor/create-actor.component';
import { CreateMovieComponent } from './components/movies/create-movie/create-movie.component';
import { CreateCategoryComponent } from './components/categories/create-category/create-category.component';
import { ActorsListComponent } from './components/actors/actors-list/actors-list.component';
import { MoviesListComponent } from './components/movies/movies-list/movies-list.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { ReadMovieComponent } from './components/movies/read-movie/read-movie.component';
import { ReadCategoryComponent } from './components/categories/read-category/read-category.component';

const childRoutes: Routes = [
  { path: 'actors', component: ActorsListComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'categories', component: CategoriesListComponent },
  { path: 'actor/:id', component: ReadActorComponent },
  { path: 'movie/:id', component: ReadMovieComponent },
  { path: 'category/:id', component:  ReadCategoryComponent}
];

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateComponent,
    children: [
      {path: 'actor', component: CreateActorComponent},
      {path: 'movie', component: CreateMovieComponent},
      {path: 'category', component: CreateCategoryComponent}
    ]
  },
  {path: 'read', component: ReadComponent,
    children: childRoutes
  },
  {path: 'update', component: UpdateComponent,
    children: childRoutes
  },
  {path: 'delete', component: DeleteComponent,
    children: childRoutes
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
