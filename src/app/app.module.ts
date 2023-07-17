import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BasicInputComponent} from './components/basic-input/basic-input.component';
import {CommonModule, DatePipe} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BasicButtonComponent} from './components/basic-button/basic-button.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Test123Component} from './components/test123/test123.component';
import {DefaultDateFormatPipe} from './core/pipes/default-date-format/default-date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicInputComponent,
    BasicButtonComponent,
    Test123Component,
    DefaultDateFormatPipe
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
