import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // Importation correcte de HttpClientModule
import { AppComponent } from './app.component';
import { IdVerificationComponent } from './id-verification/id-verification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ImageService } from './service/imageService';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    IdVerificationComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    AppRoutingModule,
    HttpClientModule,
    WebcamModule
    
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
