import { Injectable } from '@angular/core';

export interface UserDetails {
	auth: boolean,
	expireMin: number,
	org_id: string,
	roles: any,
	token: string,
	userId: string,
	user_name: string
}


@Injectable()
export class UserProfileService {
	public userDetails: UserDetails;
	
	public getUserDetails(): UserDetails {
		return {
			auth: true,
			expireMin: 10800,
			org_id: "2a49729c-6725-0387-b4ca-f454937d95e2",
			roles: "SYS_ADMIN,ADMIN,ORG_ADMIN,OPERATOR_ADMIN,CDN_ADMIN",
			token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjODI3NTg3MDVmZjJiMjYxNDJhYTIyYiIsImlhdCI6MTU2MDU5MDQxNSwiZXhwIjoxNTYwNjc2ODE1fQ.Kv_ozupD-z2MmbQ8mcRefRsl5EsPINgIbLMhG45Is2Q",
			userId: "7733321f-6ac2-7384-cb68-f3ded2de0e59",
			user_name: "Staging",
		}
	}

	public setUserDetails(user: UserDetails) {
		this.userDetails = user;
	}
}