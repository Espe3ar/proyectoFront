import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { ResponseLoginDTO } from '../dto/ResponseLoginDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authStatusSubject: BehaviorSubject<boolean>;
  public authStatus$: Observable<boolean>;

  constructor(private apiService: ApiService, private router: Router) {
    const token = localStorage.getItem('token');
    this.authStatusSubject = new BehaviorSubject<boolean>(!!token);
    this.authStatus$ = this.authStatusSubject.asObservable();
  }

  login(email: string, password: string): Observable<ResponseLoginDTO> {
    let response = this.apiService.login(email, password);
    response.subscribe(
      (jwt) => {
        console.log(jwt);
        localStorage.setItem('token', jwt.token!);
        this.authStatusSubject.next(true);
        this.router.navigateByUrl("/");
      }
    );
    return response;
  }

  isUserLogin(): Observable<boolean> {
    const isLoggedIn = !!localStorage.getItem('token');
    this.authStatusSubject.next(isLoggedIn);
    return this.authStatus$;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authStatusSubject.next(false);
  }
}