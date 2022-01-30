import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MissionService } from 'src/app/mission.service';
import { LocationServiceService } from 'src/app/location-service.service';

@Component({
  selector: 'app-mission-dialog',
  templateUrl: './mission-dialog.component.html',
  styleUrls: ['./mission-dialog.component.css']
})
export class MissionDialogComponent implements OnInit {

  totalHazardBonus: number = 0;
  missions: Array<{id: number, imagePath: string, type: string, location: string, datetime: string, amount: number, length: number, complexity: number, show: boolean, mutators: Array<{hazardBonus: number, imagePath: string, mutator: number, name: string}>}> = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private missionService: MissionService, private locationService: LocationServiceService) {
    this.getMissionDataFromID(data.missionID);
  }

  ngOnInit(): void {

  }

  getMissionDataFromID(id: number) {
    this.missionService.getMissionFromID(id).subscribe(data=>{
      this.missionService.getTypeFromTypeId(+Object(data)[0].type).subscribe(data2=>{
        this.locationService.getLocationFromId(+Object(data)[0].location).subscribe(data3=>{
          this.missionService.getAllMutatorsForOneMission(+Object(data)[0].id).subscribe(data4=>{

            this.missions.push({
              id: +Object(data)[0].id,
              type: Object(data2)[0].name,
              imagePath: Object(data2)[0].imagePath,
              location: Object(data3)[0].name,
              datetime: Object(data)[0].datetime,
              amount: +Object(data)[0].amount,
              length: Object(data)[0].length,
              complexity: Object(data)[0].complexity,
              show: true,
              mutators: Object(data4)
            })

          });
        });
      });
    });
  }

}
