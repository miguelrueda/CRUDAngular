import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ActorsComponent } from './components/actors/actors.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ActorDetailsComponent } from './components/actors/actor-details.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'home/actors', component: ActorsComponent},
  {path: 'home/actors/:id', component: ActorDetailsComponent},
  {path: 'home/movies', component: MoviesComponent},
  {path: 'home/categories', component: CategoriesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home/actors'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
