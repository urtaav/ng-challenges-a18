import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { canDeactivateGuard } from "./guards/can-deactivate.guard";

const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
    {
        path: 'home',
        loadComponent:() => import('./pages/home/home.component').then((c) => c.HomeComponent)
    }, {
        path: 'simple-action',
        loadComponent: () => import('./pages/simple-action/simple-action.component').then((c) => c.SimpleActionComponent),
        canDeactivate:[canDeactivateGuard]
    },{
        path: 'sensitive-action',
        loadComponent: () => import('./pages/sensitive-action/sensitive-action.component').then((c) => c.SensitiveActionComponent),
        canDeactivate:[canDeactivateGuard]
    }
];

export default routes;