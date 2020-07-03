import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { HeaderNavService } from './header-nav.service';

@Injectable()
export class LoginDeactivatorService implements CanActivate {
	
	constructor(public headerNavService: HeaderNavService) { }

	canActivate() {
		this.headerNavService.hide();
		return true;
	}
}