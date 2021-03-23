import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: '',
      password: '',
      remember: true
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.auth.login(this.form.getRawValue()).subscribe((response: any) => {
      this.form.reset();
      this.router.navigate(['/'])
    })
  }

}
