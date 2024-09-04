import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        loadComponent: () => import('./feature/welcome/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'projection',
        loadComponent: () => import('./feature/projection/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'pipe-puro',
        loadComponent: () => import('./feature/pipe/pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'anchor-scrolling',
        loadComponent: () => import('./feature/anchor-scrolling/pages/home/home.component').then((c) => c.HomeComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./feature/anchor-scrolling/pages/main/main.component').then((c) => c.MainComponent),
            },
            {
                path: 'foo',
                loadComponent: () => import('./feature/anchor-scrolling/pages/foo/home/home.component').then((c) => c.HomeComponent),
            }
        ]
    },
    {
        path: 'router-input',
        loadComponent: () => import('./feature/router-input/pages/home/home.component').then((c) => c.HomeComponent),
        children: [
            {
                path: 'test/:testId',
                loadComponent: () => import('./feature/router-input/pages/test/test.component').then((c) => c.TestComponent),
                data: {
                    permission: 'admin',
                },
            },
        ],
    },
    {
        path: 'simple-animation',
        loadComponent: () => import('./feature/simple-animation/pages/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: 'lazyload-component',
        loadComponent: () => import('./feature/lazyload-component/pages/home/home.component').then((c) => c.HomeComponent),
    },
    {
        path: '**',
        redirectTo: '/welcome'
    }
];
