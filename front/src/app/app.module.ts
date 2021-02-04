import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessManagementComponent } from './access-management/access-management.component';
import { MachineBuilderComponent } from './machine-builder/machine-builder.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessManagementComponent,
    MachineBuilderComponent,
    ProjectManagerComponent,
    ServiceProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
