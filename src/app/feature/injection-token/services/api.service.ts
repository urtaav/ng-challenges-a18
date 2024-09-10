import { inject, Injectable } from "@angular/core";
import { API_URL } from "../data/data";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = inject(API_URL); // Inyecta el valor de API_URL

    constructor(private http: HttpClient) { }

    getData = (): Observable<any[]> => {
        const url = `${this.apiUrl}/users`;
        return this.http.get<any[]>(url);
    }
}