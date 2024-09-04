import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'welcome',
        pathMatch:'full'
    },
    {
        path:'welcome',
        loadComponent:() => import('./feature/welcome/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path:'projection',
        loadComponent:() => import('./feature/projection/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path:'pipe-puro',
        loadComponent:() => import('./feature/pipe/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path:'anchor-scrolling',
        loadComponent:() => import('./feature/anchor-scrolling/pages/home/home.component').then((c) => c.HomeComponent),
        children:[
            {
                path:'',
                loadComponent:() => import('./feature/anchor-scrolling/pages/main/main.component').then((c) => c.MainComponent),
            },
            {
                path:'foo',
                loadComponent:() => import('./feature/anchor-scrolling/pages/foo/home/home.component').then((c) => c.HomeComponent),
            }
        ]
    },
    {
        path:'**',
        redirectTo:'/welcome'
    }
];
