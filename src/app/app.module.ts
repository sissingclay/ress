import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'service', loadChildren: './service/service.module#ServiceModule' },
      { path: '**', loadChildren: './home/home.module#HomeModule' },
    ]),
    HttpClientModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'ress' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
