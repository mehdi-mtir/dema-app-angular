import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [ //Déclarer les composants appartenant à ce module
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [ //importer des modules externes (bibliothèques Angular ou des modules personnalisés)
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [], //Concept lié aux services
  bootstrap: [AppComponent] //Composant chargé par défaut lors du changement du module courant (AppModule)
})
export class AppModule { }
