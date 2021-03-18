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

  public post: Post = {} as Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit(): void {
    //todo this is ugly
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.postService.show(Number(params.get('id'))).subscribe((post: Post) => {
        this.post = post
      })
    })
  }

  getCategoryNames = this.postService.getCategoryNames

}
