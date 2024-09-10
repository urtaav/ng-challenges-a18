import { InjectionToken } from "@angular/core";

const DEFAULT_TIMER = 3000;

export const TIMER = new InjectionToken('call timer', {
    providedIn: 'root', //Significa que el valor inyectable será globalmente accesible en la aplicación (a nivel de "root").
    factory: () => DEFAULT_TIMER //Devuelve el valor que el InjectionToken va a proveer, en este caso DEFAULT_TIMER (1000 ms).
})

export const API_URL = new InjectionToken<string>('apiUrl', {
    providedIn: 'root',
    factory: () => 'https://jsonplaceholder.typicode.com'
  });
