import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router ,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { WhereComponent } from './where/where.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoComponent,
    WhatComponent,
    WhereComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
       { 
      path: '',
      component: WhoComponent 
    },  
      { 
      path: 'who',
      component: WhoComponent 
    },  
    { 
      path: 'what',
      component: WhatComponent 
    },  
    { 
      path: 'where',
      component: WhereComponent 
    },  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
