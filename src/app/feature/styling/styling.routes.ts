import { Routes } from "@angular/router";

const routes:Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    }
];
export default routes;