import { NgModule } from '@angular/core';
import { LivyeComponentsModule } from 'livye-components';
import { UsersComponent } from './users.component';
import { UsersRoutingModule, RoutedComponents } from './users-routing.module';

@NgModule({
	imports: [ UsersRoutingModule, LivyeComponentsModule ],
	exports: [ UsersComponent ],
	declarations: [ RoutedComponents, UsersComponent ]
})

export class UsersModule {}