import { NgModule } from '@angular/core';
import { LivyeComponentsModule } from 'livye-components';
import { PackagesComponent } from './packages.component';
import { PackagesRoutingModule, RoutedComponents } from './packages-routing.module';

@NgModule({
	imports: [ PackagesRoutingModule, LivyeComponentsModule ],
	exports: [ PackagesComponent ],
	declarations: [ RoutedComponents, PackagesComponent ]
})

export class PackagesModule {}