import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelListComponent } from './channel-list.component';

const routes: Routes = [
  {path: '', component: ChannelListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelListRoutingModule {
}

export const RoutedComponents = [ChannelListComponent];
