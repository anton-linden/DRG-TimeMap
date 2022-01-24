import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationListingComponent } from './components/location-listing/location-listing.component';
import { MissionTableComponent } from './components/mission-table/mission-table.component';
import { AddMissionComponent } from './components/add-mission/add-mission.component';
// import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    MissionTableComponent,
    AddMissionComponent,
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
