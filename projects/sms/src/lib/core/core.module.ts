import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './services/auth-guard.service'; 
import { HttpClientService } from './services/http-client.service';
import { HttpService } from './services/http.service';
import { StartupService } from './services/startup.service';
import { HeaderNavService } from './services/header-nav.service';
import { UserProfileService } from './services/user-profile.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [    
    AuthGuardService,
    HttpService,
    HttpClientService,
    StartupService,
    HeaderNavService,
    UserProfileService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  }
}
