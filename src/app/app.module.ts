import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list'

import { AppComponent } from './app.component';
import { FinishlistComponent } from './finishlist/finishlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MestuffComponent } from './mestuff/mestuff.component';
import { ClubComponent } from './club/club.component';
import { AppRoutingModule } from './app-routing.module';
import { AbparkComponent } from './abpark/abpark.component';
import { SegmentComponent } from './abpark/segment/segment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FinishlistComponent,
    NavbarComponent,
    MestuffComponent,
    ClubComponent,
    AbparkComponent,
    SegmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
