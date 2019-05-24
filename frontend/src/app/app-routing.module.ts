import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './omponents/list/list.component';
import { CreateComponent } from './omponents/create/create.component';
import { EditComponent } from './omponents/edit/edit.component';

// const routes: Routes = [
//   { path: 'create', component: CreateComponent },
//   { path: 'edit/:id', component: EditComponent },
//   { path: 'list', component: ListComponent },
//   { path: '', redirectTo: '/list', pathMatch: 'full'}
// ];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})

export class AppRoutingModule { 
  title = "Dream Project";
}
