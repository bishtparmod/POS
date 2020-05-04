import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  toastOptions: any = {
    closeButton: true,
    easeTime: 300,
    timeOut: 5000,
    progressBar: true
  };

  constructor(public toaster: ToastrService, public router: Router,) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        // "Authorization": this.createToken()
      }
    });
    return next.handle(req).pipe(
      map((res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        }
        if (res.status === 205) {
          this.toaster.error("Session Expire Please login again ", "Error", this.toastOptions);
          this.router.navigateByUrl('/')
        }
        return res;
      }),
      catchError((e: any) => {
        this.throwErrorsResponse(e && e.status ? e : 500);
        return throwError(e);
      })
    );
  }



  throwErrorsResponse = (e: any) => {
    const { status, error } = e;

    console.log(`throw errors response ===> status === ${status} error === `, "error ", error, " e === ", e);

    switch (status) {
      case 400:
        this.toaster.error(error && error.error ? error.error : error ? error.message : "Bad Request", "Error", this.toastOptions);
        break;
      case 500:
        this.toaster.error(error && error.message ? error.message : "Internal Server Error", "Error", this.toastOptions);
        break;
      case 401:
        this.toaster.error("Unathorized request to server", "Error", this.toastOptions);
        break;
      default:

    }
  }
}
