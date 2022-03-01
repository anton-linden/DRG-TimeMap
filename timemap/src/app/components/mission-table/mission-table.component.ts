import { Component, OnInit, Inject } from '@angular/core';
import { MissionService } from 'src/app/mission.service';
import { LocationServiceService } from 'src/app/location-service.service';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MissionDialogComponent } from 'src/app/components/mission-dialog/mission-dialog.component';

@Component({
  selector: 'app-mission-table',
  templateUrl: './mission-table.component.html',
  styleUrls: ['./mission-table.component.css']
})
export class MissionTableComponent implements OnInit {

  showingAmount: number = 0;
  amountOfMissions: number = 0;
  missions: Array<{id: number, imagePath: string, type: string, location: string, datetime: string, amount: number, length: number, complexity: number, show: boolean, rating: number, mutators: Array<{hazardBonus: number, imagePath: string, mutator: number, name: string}>}> = [];
  missionsTypes: Array<{type: string, imagePath: string, isChecked: boolean}> = [];
  lastSort: string = "";
  multiplier: number = 1;

  constructor(private missionService: MissionService, private locationService: LocationServiceService, private dialog: MatDialog) {
    this.getTableContent();
    console.log(this.missionsTypes);

  }

  getTableContent() {
    this.missionService.getAllMissions().subscribe(data=>{
      var types = new Array();

      this.amountOfMissions = Object(data).length;
      this.showingAmount = this.amountOfMissions;

      for (let index = 0; index < Object(data).length; index++) {
        this.missionService.getTypeFromTypeId(+Object(data)[index].type).subscribe(data2=>{
          this.locationService.getLocationFromId(+Object(data)[index].location).subscribe(data3=>{
            this.missionService.getAllMutatorsForOneMission(+Object(data)[index].id).subscribe(data4=>{
              if (!types.includes(+Object(data)[index].type)) {
                types.push(+Object(data)[index].type);
                this.missionsTypes.push({
                  type: Object(data2)[0].name,
                  imagePath: Object(data2)[0].imagePath,
                  isChecked: true
                });

                this.missionsTypes.sort((a, b) => (a.type < b.type) ? -1 : 1);
              }

              this.missions.push({
                id: +Object(data)[index].id,
                type: Object(data2)[0].name,
                imagePath: Object(data2)[0].imagePath,
                location: Object(data3)[0].name,
                datetime: Object(data)[index].datetime,
                amount: +Object(data)[index].amount,
                length: Object(data)[index].length,
                complexity: Object(data)[index].complexity,
                show: true,
                rating: +Object(data)[index].rating,
                mutators: Object(data4)
              });

              this.missions.sort((a, b) => (a.type < b.type) ? -1 : 1);
            });
          });
        })
      }
    });
  }

  toggleType(event: any) {
    for (let index = 0; index < this.missionsTypes.length; index++) {
      if (event.target.value == this.missionsTypes[index].type) {
        this.missionsTypes[index].isChecked = event.target.checked;
      }
    }
  }

  toggleSelectAllTypes(event: any) {
    console.log(this.missionsTypes);
    for (let index = 0; index < this.missionsTypes.length; index++) {
      if (event.target.checked != this.missionsTypes[index].isChecked) {
        console.log(this.missionsTypes[index].type, " ; ", event.target.checked, " != ", this.missionsTypes[index].isChecked);

        this.missionsTypes[index].isChecked = !this.missionsTypes[index].isChecked;
        this.hideMissionsWithType(this.missionsTypes[index].type);
      }
    }
  }

  reload() {
    this.missions = [];
    this.missionsTypes = [];
    this.getTableContent();
  }

  sort(field: string) {
    if (field == this.lastSort) {
      // TODO: ASC/DESC
      this.multiplier *= -1;
    } else {
      this.multiplier = 1;
    }

    this.lastSort = field;

    if (field == "amount") {
      this.missions.sort((a, b) => (a.amount > b.amount) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "location") {
      this.missions.sort((a, b) => (a.location > b.location) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "type") {
      this.missions.sort((a, b) => (a.type > b.type) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "complexity") {
      this.missions.sort((a, b) => (a.complexity > b.complexity) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "length") {
      this.missions.sort((a, b) => (a.length > b.length) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "rating") {
      this.missions.sort((a, b) => (a.rating > b.rating) ? -1*this.multiplier : 1*this.multiplier);
    }

    if (field == "datetime") {
      this.missions.sort((a, b) => (a.datetime > b.datetime) ? -1*this.multiplier : 1*this.multiplier);
    }
  }

  hideMissionsWithType(type: string) {
    for (let index = 0; index < this.missions.length; index++) {
      if (type == this.missions[index].type) {
        this.missions[index].show = !this.missions[index].show;

        if (!this.missions[index].show) {
          this.showingAmount--;
        } else {
          this.showingAmount++;
        }
      }
    }
  }

  ngOnInit(): void {}

  openDialog(id: number) {
    console.log(id);
    const dialogRef = this.dialog.open(MissionDialogComponent, {
      // width: '250px',
      data: {missionID: id}
    });
  }
}


// id: +Object(data)[index].id,
// type: Object(data2)[0].name,
// imagePath: Object(data2)[0].imagePath,
// location: Object(data3)[0].name,
// datetime: Object(data)[index].datetime,
// amount: +Object(data)[index].amount,
// length: Object(data)[index].length,
// complexity: Object(data)[index].complexity,
// show: true,
// mutators: Object(data4)
