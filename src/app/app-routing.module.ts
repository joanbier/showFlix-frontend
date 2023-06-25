import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/landing-page/pages/main/main.component').then(
            (m) => m.MainComponent
          ),
      },
      {
        path: 'sign-in',
        loadComponent: () =>
          import(
            './features/landing-page/pages/login-form/login-form.component'
          ).then((m) => m.LoginFormComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import(
            './features/landing-page/pages/register-form/register-form.component'
          ).then((m) => m.RegisterFormComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
