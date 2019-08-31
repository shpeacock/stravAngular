import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FinishlistComponent } from './finishlist/finishlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MestuffComponent } from './mestuff/mestuff.component';

@NgModule({
  declarations: [
    AppComponent,
    FinishlistComponent,
    NavbarComponent,
    MestuffComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
