import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'phone',
        loadComponent: () => import('./components/phone/phone.component').then((c) => c.PhoneComponent)
    },
    {
        path: 'video',
        loadComponent: () => import('./components/video/video.component').then((c) => c.VideoComponent)
    }
];
export default routes;