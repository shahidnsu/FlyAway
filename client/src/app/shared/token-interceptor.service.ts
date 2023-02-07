import { AuthService } from './../service/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector,Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let authService=this.inject.get(AuthService);
    let token=this.auth.getToken();
    let jwtToken = req.clone({
      setHeaders: {
        Authorization: token
      }
    });
    return next.handle(jwtToken);
  }
  
}
