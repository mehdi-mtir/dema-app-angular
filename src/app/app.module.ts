import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


@NgModule({
  declarations: [ //Déclarer les composants appartenant à ce module
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent
  ],
  imports: [ //importer des modules externes (bibliothèques Angular ou des modules personnalisés)
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], //Concept lié aux services
  bootstrap: [AppComponent] //Composant chargé par défaut lors du changement du module courant (AppModule)
})
export class AppModule { }
