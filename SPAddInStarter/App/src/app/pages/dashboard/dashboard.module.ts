import { NgModule } from '@angular/core';

import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxJsonViewerModule
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule {
  constructor() {

    

  }
}
