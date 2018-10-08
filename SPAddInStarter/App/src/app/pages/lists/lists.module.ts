import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    NgxJsonViewerModule
  ],
  declarations: [
    ListsComponent
  ]
})
export class ListsModule { }
