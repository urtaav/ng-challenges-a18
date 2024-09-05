import { inject } from "@angular/core"
import { UserStore } from "../models/user.store"
import { Router } from "@angular/router";
import { iif, map, mergeMap, of } from "rxjs";
import { Role } from "../models/user.model";

export const isAdmin = () => {
    // Dependencias inyectadas
    const userStore = inject(UserStore);
    const router = inject(Router);

    return userStore.isUserLoggedIn$.pipe(
        mergeMap((hasUser) => //Este operador transforma un Observable en otro Observable. En este caso, toma el valor emitido por isUserLoggedIn$ (el estado de si el usuario está logueado) y actúa según este valor.
        //La función recibe el valor hasUser, que es true si el usuario está logueado y false si no lo está. 
        
        // Primera condición (hasUser === true): Si el usuario está logueado, se ejecuta el primer Observable
        // Segunda condición (hasUser === false): Si el usuario no está logueado, se ejecuta el segundo Observable:
        iif(() => hasUser,
                //map(Boolean): Convierte el valor recibido en un booleano explícito. Esto asegura que el valor devuelto sea true o false en función de si el usuario es administrador.
                //Primera condición 
                userStore.isAdmin$.pipe(map(Boolean)), 
                //Segunda Condifición
                of(router.parseUrl('directive-role/no-user')) //Navega a la ruta 
            ))
    );
};


export const hasRole = (accessRolesList: Role[]) => {
    const userStore = inject(UserStore);
    const router = inject(Router);

    return userStore.isUserLoggedIn$.pipe(
        mergeMap((hasUser) =>
            iif(() => hasUser,
                userStore.hasAnyRole(accessRolesList).pipe(map(Boolean)),
                of(router.parseUrl('directive-role/no-user')))
        )
    )
}