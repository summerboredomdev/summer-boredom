import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from './guards/guard.service';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'book',
    loadChildren: () =>
      import('./modules/book.module').then((m) => m.BookModule),
    canActivate: [GuardService],
  },
  {
    path: 'marcos-gallery',
    loadChildren: () =>
      import('./modules/marcos-gallery.module').then(
        (m) => m.MarcosGalleryModule
      ),
    canActivate: [GuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardService],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
