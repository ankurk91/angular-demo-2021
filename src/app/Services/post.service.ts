import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {EnvironmentService} from "./environment.service";
import {Observable} from "rxjs";
import {Post} from "../Interfaces/post";
import {Category} from "../Interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private env: EnvironmentService) {
  }

  explore(): Observable<Post[]> {
    return this.http.get(this.env.apiUrl() + 'explore')
      .pipe(map((response: any) => {
        return response.data?.data;
      }))
  }

  show(id: number): Observable<Post> {
    return this.http.get(this.env.apiUrl() + `posts/${id}`)
      .pipe(map((response: any) => {
        return response.data;
      }))
  }

  getCategoryNames(categories: Category[]): string {
    return categories.map((category: Category) => {
      return category.name;
    }).join(', ').trim();
  }
}
