import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzNavbarModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';
import { MzTooltipModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { MarcasComponent } from './marcas/marcas.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ComoTeAtendimosComponent } from './como-te-atendimos/como-te-atendimos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: MarcasComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'como-te-atendimos', component: ComoTeAtendimosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MarcasComponent,
    NosotrosComponent,
    ContactoComponent,
    ComoTeAtendimosComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzSidenavModule,
    MzTooltipModule,
    MzParallaxModule,
    MzSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
