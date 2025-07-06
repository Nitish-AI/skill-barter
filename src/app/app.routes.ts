import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Profile } from './pages/profile/profile';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    { path: 'profile', component: Profile }

];
