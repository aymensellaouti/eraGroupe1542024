import { Injectable } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { LoginResponseDto } from '../dto/login-response.dto';
import { HttpClient } from '@angular/common/http';
import { API } from '../../../config/api.config';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

export class User {
  constructor(public id: number, public email: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  isLoggedIn$: Observable<boolean> = this.user$.pipe(map((user) => !!user));
  isLoggedOut$: Observable<boolean> = this.user$.pipe(map((user) => !user));
  constructor(private http: HttpClient) {
    // On vérifier le state
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials).pipe(
      tap((response) => {
        const user = {
          email: credentials.email,
          id: response.userId,
        };
        this.userSubject.next(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', response.id);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next(null);
  }
}
