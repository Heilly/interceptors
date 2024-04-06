import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  private http = inject(HttpClient);
  // constructor() {}

  /**
   * HttpParams en Angular se utiliza para construir y manipular parámetros de consulta para las solicitudes HTTP. 
   * solicitud GET, como filtros, paginación u otros parámetros que esperan los servicios web.
   * 
   */

  obtenerUsuarios(){
    //const params = new HttpParams()
                       // .append('page', '2');    
                        
  let params = new HttpParams()
                      .append('page', '2');
  params = params.append('nombre', 'heilly');

  const headers = new HttpHeaders({
      'token-usuario': 'ABCDidh3498398'
  });
                

    return this.http.get(`https://reqres.in33/api/user`, { 
      params
     } )
        .pipe(
          map( (resp : any ) => resp['data']),
          //manejar el error en el servidor pero luego se debe de manejar en el componente, cuando se hace la subscripcion
          /**this.userService.obtenerUsuarios()
            .subscribe( 
                data =>     { console.log( data )  },
                error =>    { console.log( error)  },
                () =>       { console.log('se completo la solicitud')} ); */
        )
  }

  
}
