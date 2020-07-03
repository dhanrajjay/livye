import { NgModule } from '@angular/core';
import { LivyeComponentsModule } from 'livye-components';
import { NodesComponent } from './nodes.component';
import { NodesRoutingModule, RoutedComponents } from './nodes-routing.module';

@NgModule({
	imports: [ NodesRoutingModule, LivyeComponentsModule ],
	exports: [ NodesComponent ],
	declarations: [ RoutedComponents, NodesComponent ] 
})

export class NodesModule {}