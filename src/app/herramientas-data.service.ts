import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Herramienta } from './herramientas-list/Herramienta';

const URL = 'https://638631a8beaa645826761134.mockapi.io/Article';
@Injectable({
  providedIn: 'root'
})
export class HerramientasDataService {



  constructor(private http: HttpClient) { }

  public getAll(): Observable<Herramienta[]>{
  return this.http.get<Herramienta[]>(URL); //.pipe(
                                          //tap((herramientas:Herramienta[])=> 
                                         // herramientas.forEach (herramienta => herramienta.quantity = 0)));
  }


}


