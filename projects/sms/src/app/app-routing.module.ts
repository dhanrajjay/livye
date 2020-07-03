import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { ErrorComponent } from '../lib/modules/error/error.component';
import { LiveStreamComponent } from '../lib/modules/live-stream/live-stream.component';
import { PackagesComponent } from '../lib/modules/packages/packages.component';
import { LoginComponent } from '../lib/modules/login/login.component';
import { AuthGuardService, LoginDeactivatorService } from '../lib/core';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{
		       	path: 'users',
		       	loadChildren: '../lib/modules/users/users.module#UsersModule',		       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'nodes',
		       	loadChildren: '../lib/modules/nodes/nodes.module#NodesModule',		       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'dashboard',
		       	loadChildren: '../lib/modules/dashboard/dashboard.module#DashboardModule',		       			       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'channel-list',
		       	loadChildren: '../lib/modules/channel-list/channel-list.module#ChannelListModule',		       			       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'settings',
		       	loadChildren: '../lib/modules/settings/settings.module#SettingsModule',		       			       		       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'vas',
		       	loadChildren: '../lib/modules/vas/vas.module#VASModule',		       			       		       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'packages',
		       	loadChildren: '../lib/modules/packages/packages.module#PackagesModule',		       			       		       	
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'certificates',
		       	loadChildren: '../lib/modules/certificates/certificates.module#CertificatesModule',
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },
		    {
		       	path: 'stream',
		       	loadChildren: '../lib/modules/live-stream/live-stream.module#LiveStreamModule',
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },		    
		    {
		       	path: 'static',
		       	loadChildren: '../lib/modules/sites/static/static-site.module#StaticSiteModule',
		       	canActivate: [AuthGuardService],
		       	canActivateChild: [AuthGuardService]
		    },		    
			{
				path: 'error',
				component: ErrorComponent
			},
			{
				path: 'login',
				component: LoginComponent,
				canActivate: [LoginDeactivatorService]
			},			
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			}
		], { useHash: true })
	],
	exports: [
		RouterModule
	]
})

export class InfynectRoutingModule { }