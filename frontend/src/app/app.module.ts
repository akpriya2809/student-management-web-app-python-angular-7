import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ListComponent } from './omponents/list/list.component';
//import { CreateComponent } from './omponents/create/create.component';
//import { EditComponent } from './omponents/edit/edit.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTaskService } from './omponents/Services/create-task.service';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { EventsComponent } from './events/events.component';
import { CreateComponent } from './create/create.component';
import { EventService} from './event.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'create', component: CreateComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    StudentsComponent,
    EventsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
