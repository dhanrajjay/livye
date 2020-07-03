import { NgModule } from '@angular/core';
import { CertificatesComponent } from './certificates.component';
import { CertificatesRoutingModule, RoutedComponents } from './certificates-routing.module';

@NgModule({
	imports: [ CertificatesRoutingModule ],
	exports: [ CertificatesComponent ],
	declarations: [ RoutedComponents, CertificatesComponent ]
})

export class CertificatesModule {}