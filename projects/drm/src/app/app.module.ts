import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StartupService, InfynectHttpInterceptor } from '../lib/core';
import { ErrorComponent } from '../lib/modules/error/error.component';
import { LoginComponent } from '../lib/modules/login/login.component';
import { ToastComponent } from '../lib/modules/toast/toast.component';
import { HeaderComponent } from '../lib/modules/header/header.component';
import { InfynectModule } from '../lib/modules/infynect.module';
import { AppComponent } from './app.component';
import { InfynectRoutingModule } from './app-routing.module';
import { CoreModule } from '../lib/core/core.module';
import { LoginDeactivatorService } from '../lib/core/';

export function bootstrapFactoryProvider(provider: StartupService) {
    return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    ToastComponent,
    HeaderComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    InfynectModule,
    InfynectRoutingModule,    
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [    
    LoginDeactivatorService,
    { provide: APP_INITIALIZER, useFactory: bootstrapFactoryProvider, deps: [StartupService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: InfynectHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
