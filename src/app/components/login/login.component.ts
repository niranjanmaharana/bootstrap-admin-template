import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ErrorResponseHandler } from 'src/app/util/response.message';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  formLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['niranjan', Validators.required],
      password: ['Niranjan95@', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onLoginClick() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.error = '';
    this.formLoading = false;
    this.auth.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          this.error = ErrorResponseHandler.getResponseMessage(error.status, error.statusText);
          alert(this.error);
        });
    this.formLoading = false;
  }

  onLogoutClick() {
    this.auth.logout();
  }
}
