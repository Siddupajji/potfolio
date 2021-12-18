import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NavbarComponent } from './navbar/navbar.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxImageZoomModule,
    MdbCarouselModule,
    StickyNavModule,
    IvyCarouselModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
