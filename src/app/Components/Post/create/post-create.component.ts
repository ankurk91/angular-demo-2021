import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styles: []
})
export class PostCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: '',
      body: '',
      image: null,
      publish: true
    })
  }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    let files = (event.target as HTMLInputElement).files || event.dataTransfer.files;

    let selectedFile = null;

    if (files.length) {
      selectedFile = files[0]
    }

    this.form.patchValue({
      image: selectedFile
    });

    this.form.updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
