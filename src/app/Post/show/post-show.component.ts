import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styles: []
})
export class PostShowComponent implements OnInit {

  public postId: number;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.postId = Number(params.get('id'));
    });
  }

}
