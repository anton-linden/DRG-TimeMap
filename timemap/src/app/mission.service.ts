import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  baseURL: string = "http://localhost/drg-timemap/timemap/src/app/api/";
  constructor(private http:HttpClient) { }

  getAllMissions() {
    return this.http.get(this.baseURL + "getAllMissions.php");
  }

  getTypeFromTypeId(Id: number) {
    return this.http.get(this.baseURL + "getTypeFromTypeId.php?typeID=" + Id);
  }
}
