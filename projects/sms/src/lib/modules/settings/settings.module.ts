import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule, RoutedComponents } from './settings-routing.module';

@NgModule({
	imports: [ SettingsRoutingModule ],
	exports: [ SettingsComponent ],
	declarations: [ RoutedComponents, SettingsComponent ]
})

export class SettingsModule {}