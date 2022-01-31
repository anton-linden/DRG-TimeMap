import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  // baseURL: string = "http://localhost/time-map-branch2/drg-timemap/timemap/src/app/api/";
  baseURL: string = "http://localhost/drg-timemap/timemap/src/app/api/";
  // baseURL: string = "/api/";
  constructor(private http:HttpClient) { }

  getAllMissions() {
    return this.http.get(this.baseURL + "getAllMissions.php");
  }

  getAllMutatorsForOneMission(Id: number) {
    return this.http.get(this.baseURL + "getAllMutatorsForOneMission.php?id=" + Id);
  }

  getTypeFromTypeId(Id: number) {
    return this.http.get(this.baseURL + "getTypeFromTypeId.php?typeID=" + Id);
  }

  getMissionFromID(Id: number) {
    return this.http.get(this.baseURL + "getMissionFromID.php?id=" + Id);
  }

  castVoteOnMission(Id: number, Vote: number) {
    const headers = { 'content-type': 'application/json'}

    const obj = {
      missionID: Id,
      vote: Vote
    };

    return this.http.post(this.baseURL + "castVoteOnMission.php", obj, {'headers':headers})
  }

}
