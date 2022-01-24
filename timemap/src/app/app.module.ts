import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationListingComponent } from './components/location-listing/location-listing.component';
import { MissionTableComponent } from './components/mission-table/mission-table.component';
// import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    MissionTableComponent,
    // SortDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
