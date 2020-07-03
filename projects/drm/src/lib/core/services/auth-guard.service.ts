import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanActivateChild,
	CanLoad,
	Router, ActivatedRouteSnapshot
} from '@angular/router';
import { HeaderNavService } from './header-nav.service';
import { Constants } from '../../shared/constants';
import { UserProfileService } from './user-profile.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {
	private currentUserRole = this.userProfileService.getUserDetails();

	constructor(
		private router: Router,
		private headerNavService: HeaderNavService,		
		private userProfileService: UserProfileService
	) { }

	private userHasRole(data){
		if (!data) 
			return false;
        var access=false;
        for (var i = data.length - 1; i >= 0; i--) {
            if(this.currentUserRole.roles.indexOf(data[i])>-1){
                access=true;
                break;                        
            }
        };
        return access;
    }

	canLoad() {
		const user = this.userProfileService.getUserDetails();
		const url = this.router.url;
		// if (Constants.ROLES[url]) {
		//	return true;
		// }
		if (this.userHasRole(Constants.ROLES[url])) {
			return true;
		} else {
			this.router.navigate(['/error']);
			return false;
		}				
	}

	canActivate(next: ActivatedRouteSnapshot) {
		const user = this.userProfileService.getUserDetails();
		const url = next.url[0].path;
		if (this.userHasRole(Constants.ROLES[url])) {
			this.headerNavService.show();
			return true;
		} else {
			this.router.navigate(['/error']);
			return false;
		}										
	}

	canActivateChild(next: ActivatedRouteSnapshot) {
		return true;
	}
}