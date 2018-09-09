import { ImageComponent } from './shared/image/image.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { DayModule } from './day/day.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    BrowserModule,
    DayModule,
    HttpClientModule,
    ItineraryModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
