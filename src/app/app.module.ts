import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent} from './nav/navigation.component';
import { MainComponent } from './main/main.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { MydirectivesComponent } from './mydirectives/mydirectives.component';
import { ChangecolorDirective } from './directives/changecolor.directive';
import { CardDirective } from './directives/card.directive';
import { CinterComponent } from './cinter/cinter.component';
import { CsubinterComponent } from './cinter/csubinter/csubinter.component';
import { TformsComponent } from './tforms/tforms.component';
import { TakeparamsComponent } from './cinter/takeparams/takeparams.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const myroutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'dbinding', component: DatabindingComponent},
  {path: 'mydirectives', component: MydirectivesComponent},
  {path: 'cinter', component: CinterComponent},
  {path: 'cinter/:id', component: TakeparamsComponent},
  {path: 'forms', component: TformsComponent},
  {path: 'books', component: BooksComponent, children: [
    {path: ':id/:name', component: BookComponent}
  ]},
  {path: 'notfound', component: PagenotfoundComponent},
  {path: '**', redirectTo: 'notfound', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainComponent,
    DatabindingComponent,
    MydirectivesComponent,
    ChangecolorDirective,
    CardDirective,
    CinterComponent,
    CsubinterComponent,
    TformsComponent,
    TakeparamsComponent,
    BooksComponent,
    BookComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
