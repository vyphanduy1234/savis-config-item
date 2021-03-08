import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularDraggableModule } from 'angular2-draggable';
import { SvConfigItemComponent } from './config-item/sv-config-item.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from "@angular/common";
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    SvConfigItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AngularDraggableModule,
    NzSliderModule,
    NzDividerModule,
    NzSwitchModule,
    NzSelectModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzIconModule
  ],
  exports: [SvConfigItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule  { }


