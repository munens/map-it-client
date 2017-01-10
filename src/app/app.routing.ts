import { Routes, RouterModule } from '@angular/router';
import { AppSignupComponent } from './app-signup/app-signup.component';
import { AppHomeComponent } from './app-home/app-home.component'

const APP_ROUTES: Routes = [
    {path: '', component: AppHomeComponent},
    {path: 'signup', component: AppSignupComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
