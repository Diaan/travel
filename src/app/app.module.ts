import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { CityNamePipe } from './shared/city-name.pipe';
import { ItineraryComponent } from './itinerary/itinerary/itinerary.component';
import { DayComponent } from './day/day/day.component';
import { DayDescriptionComponent } from './day/day-description/day-description.component';
import { DayPlacesComponent } from './day/day-places/day-places.component';
import { DayPhotosComponent } from './day/day-photos/day-photos.component';
import { ItineraryDayComponent } from './itinerary/itinerary-day/itinerary-day.component';
import { DayNumberComponent } from './shared/day-number/day-number.component';
import { ItinerarySummaryComponent } from './shared/itinerary-summary/itinerary-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    CityNamePipe,
    ItineraryComponent,
    DayComponent,
    DayDescriptionComponent,
    DayPlacesComponent,
    DayPhotosComponent,
    ItineraryDayComponent,
    DayNumberComponent,
    ItinerarySummaryComponent
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    // To initialize AngularFire
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
