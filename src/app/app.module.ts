import { AppRoutes } from './app.routes';
import { DayModule } from './day/day.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { CityNamePipe } from './shared/city-name.pipe';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { ItineraryDayComponent } from './itinerary/itinerary-day/itinerary-day.component';
import { DayNumberComponent } from './shared/day-number/day-number.component';
import { ItinerarySummaryComponent } from './itinerary/itinerary-summary/itinerary-summary.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CityNamePipe,
    ItineraryComponent,
    ItineraryDayComponent,
    DayNumberComponent,
    ItinerarySummaryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    DayModule,
    RouterModule.forRoot(AppRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
