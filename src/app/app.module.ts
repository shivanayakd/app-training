import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    TformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
