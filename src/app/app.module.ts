import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    declarations: [ AppComponent, NavbarComponent ],
    bootstrap: [ AppComponent ],
    providers: [  ]
})

export class AppModule {}