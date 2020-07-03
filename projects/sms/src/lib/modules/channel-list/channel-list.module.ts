import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChannelListComponent } from './channel-list.component';
import { ChannelListRoutingModule, RoutedComponents } from './channel-list-routing.module';
import { CreateChannelComponent } from './create/create-channel.component';

@NgModule({
	imports: [ ChannelListRoutingModule, CommonModule, FormsModule, NgbModule, ReactiveFormsModule ],
	exports: [ ChannelListComponent ],
	declarations: [ RoutedComponents, ChannelListComponent, CreateChannelComponent ],
	entryComponents: [ CreateChannelComponent ]
})

export class ChannelListModule {}