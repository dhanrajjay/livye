import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastService } from '../toast/toast.service'
import { LoginService } from './login.service';
import { UserDetails, UserProfileService } from '../../core/';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})

export class LoginComponent {

	constructor(
		private toastService: ToastService,
		private router: Router,
		private loginService: LoginService,
		private userProfileService: UserProfileService
	) {

	}
	
	form: FormGroup = new FormGroup({
	    username: new FormControl(''),
	    password: new FormControl(''),
	});

	submit() {
	    this.loginService.login(this.form.value).subscribe((response: UserDetails) => {
	     	sessionStorage.setItem('currentLoggedInUser', JSON.stringify(response));
	    	this.userProfileService.setUserDetails(response);
			this.router.navigateByUrl('/dashboard');
	    }, (error) => {
			this.router.navigateByUrl('/dashboard');
	    });
	}	
}