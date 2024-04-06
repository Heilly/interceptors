# Interceptor

Para que este interceptor realmente intercepte solicitudes, debe configurarlo ``HttpClient`` para usarlo.



## Configuración
en el ``app.config.ts``
<pre>
    export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(
        withInterceptors( [interceptorInterceptor] )
        )
    ]
    };
</pre>

## Modificar solicitudes

``HttpRequest`` y ``HttpResponse`` no pueden modificarlos directamente. En cambio, los interceptores aplican mutaciones clonando estos objetos mediante la operación ``.clone()``  y especificando qué propiedades deben mutarse en la nueva instancia. Esto hacer actualizaciones (como ``HttpHeaders`` o ``HttpParams``).
<pre>
    const reqWithHeader = req.clone({
    headers: req.headers.set('X-New-Header', 'new header value'), });
</pre>

## Inyección de dependencia en interceptores.

<pre>
    export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

        // Inject the current `AuthService` and use it to get an authentication token:
        const authToken = inject(AuthService).getAuthToken();
        
        // Clone the request to add the authentication header.
        const newReq = req.clone({headers: {
            req.headers.append('X-Authentication-Token', authToken),
        }});
        return next(newReq);
    }
</pre>
