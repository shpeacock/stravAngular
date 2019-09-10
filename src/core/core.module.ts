import { NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { environment } from '@env/environment';

import { MAT_DATE_LOCALE } from '@angular/material';
import { AngularMaterialModule } from '@app/shared/angular-material.module';

@NgModule({
  declarations: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClient,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: environment.defaultLanguage },
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
