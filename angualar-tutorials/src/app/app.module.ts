import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';



import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { NbFirebasePasswordStrategy, NbFirebaseAuthModule } from '@nebular/firebase-auth';
import { NbSecurityModule } from '@nebular/security';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCA_J-5jsa0DiN4F9UaZj03im3pF_rwXS0",
      authDomain: "captcha-game.firebaseapp.com",
      projectId: "captcha-game",
      storageBucket: "captcha-game.appspot.com",
      messagingSenderId: "933958519829",
      appId: "1:933958519829:web:60ba7010bba2a8123e521c"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbFirebaseAuthModule,
    NbAuthModule.forRoot({
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
    NbSecurityModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
