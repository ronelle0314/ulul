import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  filePath: string;
  constructor(private http: HttpClient) { }

getAll(): Observable<any>{
  return this.http.get('http://localhost:8181/getRequest');
}
postTestToApi() {
  console.log("POST TEST");
  this.http.post<string>("http://localhost:8181/test", "Ok na na read na").subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log("ERROR OCCURRED IN POST" + err);
    }
  );
}


getFilePathFromComponent(filePath: string) {
  this.filePath = filePath;
  console.log("FILEPATH IN REST SERVICE TS " + this.filePath);
}

postFilePathToApi() {
  console.log("POSTING FILEPATH TO SERVER: " + this.filePath);
  this.http.post<String>("http://localhost:8181/test", this.filePath).subscribe();
}


}