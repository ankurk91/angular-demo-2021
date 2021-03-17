import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {PostService} from "../Services/post.service";
import {Post} from "../Interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class SinglePostResolver implements Resolve<Post> {
  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post> {
    return this.postService.show(Number(route.paramMap.get('id')));
  }
}
