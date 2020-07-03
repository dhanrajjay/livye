import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VASComponent } from './vas.component';

const routes: Routes = [
  {path: '', component: VASComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VASRoutingModule {
}

export const RoutedComponents = [VASComponent];
