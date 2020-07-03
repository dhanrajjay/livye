import { NgModule } from '@angular/core';
import { StaticSiteComponent } from './static-site.component';
import { StaticSiteRoutingModule, RoutedComponents } from './static-site-routing.module';

@NgModule({
	imports: [ StaticSiteRoutingModule ],
	exports: [ StaticSiteComponent ],
	declarations: [ RoutedComponents, StaticSiteComponent ]
})

export class StaticSiteModule {}