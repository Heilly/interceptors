import { HttpErrorResponse, HttpHeaders, type HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {

  const headers = new HttpHeaders({
    'token-usuario': 'ABCDidh3498398'
});

const reqCLon = req.clone({ headers })

  console.log('req', req);
  console.log('next', next);
  console.log('reqCLon', reqCLon);
  
  return next(reqCLon).pipe(
    catchError ( (err : HttpErrorResponse) => { return handleErrors(err) })
  );
};

// Función para manejar errores de solicitud
const handleErrors = (error: HttpErrorResponse): Observable<never> => {
  console.warn('Error:', error);
  // Retornar un observable que emita un error
  return throwError('Error en la solicitud. Por favor, inténtalo de nuevo.');
};
