import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Post} from "../../../Interfaces/post";
import {PostService} from "../../../Services/post.service";

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styles: []
})
export class PostShowComponent implements OnInit {

  public post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    const postId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.postService.show(postId).subscribe((post: Post) => {
      this.post = post
    })
  }

  getCategoryNames = this.postService.getCategoryNames

}
