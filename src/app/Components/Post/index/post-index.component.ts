import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../Interfaces/post";
import {Observable, of} from "rxjs";
import {EnvironmentService} from "../../../Services/environment.service";
import {map, switchMap, switchMapTo} from "rxjs/operators";
import {Category} from "../../../Interfaces/category";
import {PostService} from "../../../Services/post.service";

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styles: []
})
export class PostIndexComponent implements OnInit {

  public posts?: Observable<Post[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.explore();
  }

  getCategories(categories: Category[]): string {
    return categories.map((category: Category) => {
      return category.name;
    }).join(', ').trim();
  }
}
