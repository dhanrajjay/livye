import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderNavService } from '../../core/services/header-nav.service';
import { LoginService } from '../login/login.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
	@ViewChild('sidenav', {static: false}) public sidenav;

	constructor(
		private router: Router,
		private headerNavService: HeaderNavService,
		private loginService: LoginService
	) { }

	ngOnInit(): void {
		this.headerNavService.show();
	}		

	toggle(): void {
		this.sidenav.toggle();
	}

	doLogout(): void {
		/* this.logout.subscribe(() => {
			this.router.navigateByUrl('/login');
		}) */
		this.router.navigateByUrl('/login');		
	}
}