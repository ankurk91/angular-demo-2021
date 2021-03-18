import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {PostService} from "../../../Services/post.service";
import {Post} from "../../../Interfaces/post";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styles: []
})
export class PostShowComponent implements OnInit {

  public post?: Post;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.post = data.post
    })
  }

}
