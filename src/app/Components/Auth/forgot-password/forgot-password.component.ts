import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styles: []
})
export class ForgotPasswordComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: '',
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.forgotPassword(this.form.getRawValue()).subscribe((response: any) => {
      this.form.reset();
    })
  }

}
