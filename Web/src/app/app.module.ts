import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { FormularioInvestigadorComponent } from './formulario-investigador/formulario-investigador.component';
import { InvestigadorService } from './services/investigador.service';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    FormularioInvestigadorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [InvestigadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
