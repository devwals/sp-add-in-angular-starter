import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    NgxJsonViewerModule,
    ThemeModule
  ],
  declarations: [GroupsComponent]
})
export class GroupsModule { }
