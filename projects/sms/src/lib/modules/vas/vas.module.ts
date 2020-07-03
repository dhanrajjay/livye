import { NgModule } from '@angular/core';
import { LivyeComponentsModule } from 'livye-components';
import { VASComponent } from './vas.component';
import { VASRoutingModule, RoutedComponents } from './vas-routing.module';

@NgModule({
	imports: [ VASRoutingModule, LivyeComponentsModule ],
	exports: [ VASComponent ],
	declarations: [ RoutedComponents, VASComponent ]
})

export class VASModule {}