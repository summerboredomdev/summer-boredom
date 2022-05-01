import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarcosGalleryComponent } from '../projects/marcos-gallery/marcos-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: MarcosGalleryComponent,
  },
];

@NgModule({
  declarations: [MarcosGalleryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MarcosGalleryModule {}
