import { Routes } from "@angular/router";
import { hasRole, isAdmin } from "./guards/has-permission.guard";

 const routes:Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent)
            },
            {
                path: 'no-user',
                loadComponent: () => import('./dashboard/no-user/no-user.component').then((c) => c.NoUserComponent)
            },
            {
                path: 'enter',
                canMatch: [() => isAdmin()],
                loadComponent: () => import('./dashboard/admin/admin.component').then((c) => c.AdminComponent)
            },
            {
                path: 'enter',
                canMatch: [() => hasRole(['MANAGER'])],
                loadComponent: () => import('./dashboard/manager/manager.component').then((c) => c.ManagerComponent)
            },
            {
                path: 'enter',
                canMatch: [() => hasRole(['WRITER','READER'])],
                loadComponent: () => import('./dashboard/writer-reader/writer-reader.component').then((c) => c.WriterReaderComponent)
            },
            {
                path: 'enter',
                canMatch: [() => hasRole(['CLIENT'])],
                loadComponent: () => import('./dashboard/client/client.component').then((c) => c.ClientComponent)
            },
            {
                path: 'enter',
                loadComponent: () => import('./dashboard/everyone/everyone.component').then((c) => c.EveryoneComponent)
            },
        ]
    },
];

export default routes;