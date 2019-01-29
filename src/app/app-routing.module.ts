import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'create', component: CreateComponent},
  {path: 'read', component: ReadComponent},
  {path: 'home', component: HomeComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
