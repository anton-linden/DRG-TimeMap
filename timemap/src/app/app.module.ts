import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LocationListingComponent } from './components/location-listing/location-listing.component';
import { MissionTableComponent } from './components/mission-table/mission-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionDialogComponent } from './components/mission-dialog/mission-dialog.component';
// import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    LocationListingComponent,
    MissionTableComponent,
    MissionDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
