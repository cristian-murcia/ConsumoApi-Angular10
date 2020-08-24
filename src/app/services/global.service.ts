import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class GlobalService {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
    }

    //Traer todos los personajes
    getAllCharacter(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'character/', { headers: headers});
    }

    //Traer personaje por id
    getCharacter(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'character/' + id, { headers: headers});
    }

}