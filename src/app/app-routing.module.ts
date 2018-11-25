import { NgModule, Input } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movies/movie/movie.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "movie/:id", component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
