import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices.component';
import { StreamsComponent } from './streams.component';

import { DevicesService } from './devices.service';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'streams', component: StreamsComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: DevicesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    StreamsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DevicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
