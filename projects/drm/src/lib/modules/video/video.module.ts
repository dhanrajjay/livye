import { NgModule } from '@angular/core';
import { VideoComponent } from './video.component';
import { VideoRoutingModule, RoutedComponents } from './video-routing.module';

@NgModule({
	imports: [ VideoRoutingModule ],
	exports: [ VideoComponent ],
	declarations: [ RoutedComponents, VideoComponent ]
})

export class VideoModule {}