import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './material.module';
import { BookComponent } from '../projects/book/book.component';
import { DescriptionComponent } from '../components/description/description.component';
import { PictureComponent } from '../components/picture/picture.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BookComponent,
  },
];
@NgModule({
  declarations: [BookComponent, DescriptionComponent, PictureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    DragDropModule,
  ],
})
export class BookModule {}
