import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from 'src/app/location-service.service';

@Component({
  selector: 'app-location-listing',
  templateUrl: './location-listing.component.html',
  styleUrls: ['./location-listing.component.css']
})
export class LocationListingComponent implements OnInit {

  locations: Array<{id: number, name: string}> = [];

  constructor(private locationService:LocationServiceService) {

    this.locationService.getAllLocations().subscribe(data=>{
      for (let index = 0; index < Object(data).length; index++) {
        this.locations.push({
          id: Object(data)[index].id,
          name: Object(data)[index].name
        });
      }
    });
  }

  ngOnInit(): void {}
}
