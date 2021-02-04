import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessManagementComponent } from './access-management/access-management.component';
import { MachineBuilderComponent } from './machine-builder/machine-builder.component';
import { ProjectManagerComponent } from './project-manager/project-manager.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
