import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

const routes: Routes = [
  { path : '' , component : SearchpageComponent},
  { path : 'homepage/:name' , component : HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
