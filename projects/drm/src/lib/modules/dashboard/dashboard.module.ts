import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule, RoutedComponents } from './dashboard-routing.module';

@NgModule({
	imports: [ DashboardRoutingModule ],
	exports: [ DashboardComponent ],
	declarations: [ RoutedComponents, DashboardComponent ]
})

export class DashboardModule {}