import { NgModule } from '@angular/core';
import { LivyeComponentsModule } from 'livye-components';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule, RoutedComponents } from './dashboard-routing.module';

@NgModule({
	imports: [ DashboardRoutingModule, LivyeComponentsModule ],
	exports: [ DashboardComponent ],
	declarations: [ RoutedComponents, DashboardComponent ]
})

export class DashboardModule {}