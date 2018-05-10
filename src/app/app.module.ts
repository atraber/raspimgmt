import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DevicesComponent } from './devices.component';
import { StreamsComponent } from './streams.component';
import { ScoresComponent } from './scores.component';

import { DevicesService } from './devices.service';
import { ScoresService } from './scores.service';

const appRoutes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'streams', component: StreamsComponent },
  { path: 'scores', component: ScoresComponent },
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
    StreamsComponent,
    ScoresComponent,
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
    DevicesService,
    ScoresService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
