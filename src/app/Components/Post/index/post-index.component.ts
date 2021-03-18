import {Component, OnInit} from '@angular/core';
import {Post} from "../../../Interfaces/post";
import {Observable} from "rxjs";
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

  getCategoryNames = this.postService.getCategoryNames
}
