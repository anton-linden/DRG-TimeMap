import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/app/mission.service';
import { LocationServiceService } from 'src/app/location-service.service';

@Component({
  selector: 'app-add-mission',
  templateUrl: './add-mission.component.html',
  styleUrls: ['./add-mission.component.css']
})
export class AddMissionComponent implements OnInit {

  missionTypes: Array<{id: number, type: string, imagePath: string}> = [];
  locations: Array<{id: number, name: string}> = [];

  constructor(private missionService: MissionService, private locationService: LocationServiceService) {
    this.getAllMissionTypes();
    this.getAllLocations();
  }

  getAllMissionTypes() {
    this.missionService.getAllMissionTypes().subscribe(data=>{
      for (let index = 0; index < Object(data).length; index++) {
        this.missionTypes.push({
          id: +Object(data)[index].id,
          type: Object(data)[index].name,
          imagePath: Object(data)[index].imagePath
        });
      }
    });
  }

  getAllLocations() {
    this.locationService.getAllLocations().subscribe(data=>{
      for (let index = 0; index < Object(data).length; index++) {
        this.locations.push({
          id: Object(data)[index].id,
          name: Object(data)[index].name,
        });
      }
    });
  }

  ngOnInit(): void {
  }

}
