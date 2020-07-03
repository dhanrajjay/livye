import { NgModule } from '@angular/core';
import { LiveStreamComponent } from './live-stream.component';
import { LiveStreamRoutingModule, RoutedComponents } from './live-stream-routing.module';

@NgModule({
	imports: [ LiveStreamRoutingModule ],
	exports: [ LiveStreamComponent ],
	declarations: [ RoutedComponents, LiveStreamComponent ]
})

export class LiveStreamModule {}