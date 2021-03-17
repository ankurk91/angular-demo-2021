import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {EnvironmentService} from "./environment.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  explore() {
    return this.http.get(this.env.apiUrl() + 'explore')
      .pipe(map((response: any) => {
        return response.data?.data;
      }))
  }
}
