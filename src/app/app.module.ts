import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Servicios
import { MessageService } from './services/message.service';
import {FirestoreService} from './services/firestore/firestore.service'

import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';

//Firebase
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment'
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';

//Paginacion
import {NgxPaginationModule} from 'ngx-pagination'

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { TeamComponent } from './team/team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { AbogadoComponent } from './CRUD/abogado/abogado.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { RegistrarAbogadoComponent } from './CRUD/registrar-abogado/registrar-abogado.component';
import { RegistrarUsuarioComponent } from './CRUD/registrar-usuario/registrar-usuario.component';
import { AngularFireStorageModule } from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ProjectsComponent,
    GraphicsComponent,
    TeamComponent,
    ContactUsComponent,
    PanelComponent,
    FooterComponent,
    AbogadoComponent,
    RegistrarAbogadoComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    // [ MatButtonModule, MatCheckboxModule ]
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    NgxPaginationModule
  ],
  providers: [MessageService,FirestoreService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {
}
