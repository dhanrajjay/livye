import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivyeComponentsComponent } from './livye-components.component';
import { CreateUserComponent } from './user-list/create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateOrgComponent } from './organization-list/create/create-org.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { SubscriberListComponent } from './subscriber/subscriber-list.component';
import { PackageListComponent } from './package/package-list.component';

@NgModule({
  declarations: [LivyeComponentsComponent, UserListComponent, OrganizationListComponent, 
  CreateUserComponent, CreateOrgComponent, SubscriberListComponent, PackageListComponent],
  entryComponents: [CreateUserComponent, CreateOrgComponent],
  imports: [
  	CommonModule, FormsModule, NgbModule, ReactiveFormsModule
  ],
  exports: [LivyeComponentsComponent, UserListComponent, 
  OrganizationListComponent, SubscriberListComponent, PackageListComponent]
})
export class LivyeComponentsModule { }
