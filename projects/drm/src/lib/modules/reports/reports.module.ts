import { NgModule } from '@angular/core';
import { ReportsComponent } from './reports.component';
import { ReportsRoutingModule, RoutedComponents } from './reports-routing.module';

@NgModule({
	imports: [ ReportsRoutingModule ],
	exports: [ ReportsComponent ],
	declarations: [ RoutedComponents, ReportsComponent ]
})

export class ReportsModule {}