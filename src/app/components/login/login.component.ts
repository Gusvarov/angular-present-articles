import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private loginService: LoginService,
              private fb: FormBuilder,
              private router: Router) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.sub = this.loginService.getUsers(this.loginForm.value.username, this.loginForm.value.password).subscribe(user => {
      this.router.navigate(['/feeds']);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
