import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { UserRegister } from '../models/user-register.model';
import { UserLogin } from '../models/user-login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3100';
  private userKey = 'userUUID';
  private expirationKey = 'uuidExpiration';

  private authenticatedUsers = signal<User[]>([]);

  constructor(private http: HttpClient) { }

  /**
   * Makes an HTTP GET request to the /isAuthenticated route to determine if the current user is authenticated.
   * @returns An Observable that resolves to true if the user is authenticated or false if not.
   * @remarks The request is made with the observe: 'response' option, so the entire HttpResponse is
   * returned. The response status is then checked to see if it is 200, indicating that the user is
   * authenticated. If the request fails, the Observable returned by catchError is resolved with false.
   */
  isAuthenticated(): Observable<boolean> {
    const url = this.baseUrl + '/isAuthenticated';
    return this.http.get(url, { observe: 'response', withCredentials: true }).pipe(
      map((response) => {
        if (response.status === 200) {
          this.setUserUUID();
          this.setUser(response.body as User);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  getUser(): User | undefined {
    const userUUID = this.getUserUUID();
    return this.authenticatedUsers().find((user) => user.id === userUUID);
  }

  private setUser(userData: User): void {
    const userId = this.getUserUUID();
    const users = this.authenticatedUsers();

    let user = users.find((user) => user.id === userId);

    if (user) {
      user = { ...user, ...userData };
    }
    else {
      user = {
        ...userData,
        id: userId!
      }
      users.push(user);
    }

    this.authenticatedUsers.set([...users]);
  }

  /**
   * Logs the current user out by making an HTTP POST request to the /logout route.
   * @remarks
   * The request is made with the withCredentials option set to true, so the request is sent
   * with the user's session cookie.
   * After the request is made, the user's UUID is cleared from local storage.
   */
  logout(): Observable<boolean> {
    const url = this.baseUrl + '/logout';
    return this.http.post(url, {}, { observe: 'response', withCredentials: true }).pipe(
      map((response) => {
        if (response.status === 200) {
          this.clearUserUUID();
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  /**
   * Sets a UUID for the current user in local storage if one doesn't already exist.
   * @remarks
   * The UUID is set to expire in 24 hours. If a UUID already exists and has not expired,
   * it is not overwritten.
   * @private
   */
  private setUserUUID(): void {
    const existingUUID = localStorage.getItem(this.userKey);
    const expiration = localStorage.getItem(this.expirationKey);
    const now = Date.now();

    if (!existingUUID || !expiration || now > parseInt(expiration, 10)) {
      const uuid = crypto.randomUUID();
      const expirationTime = now + 24 * 60 * 60 * 1000; // 24h

      localStorage.setItem(this.userKey, uuid);
      localStorage.setItem(this.expirationKey, expirationTime.toString());
    }
  }

  /**
   * Clears the stored UUID and its expiration from local storage.
   * @private
   */
  private clearUserUUID(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.expirationKey);
  }

  /**
   * Retrieves the current user's UUID from local storage, or null if no valid UUID is stored.
   * @returns The current user's UUID if it is valid, or null if it is not.
   * @remarks
   * A valid UUID is one that has not expired. If the UUID has expired, or if no UUID is stored at all,
   * null is returned and the stored UUID and its expiration are cleared.
   */
  getUserUUID(): string | null {
    const uuid = localStorage.getItem(this.userKey);
    const expiration = localStorage.getItem(this.expirationKey);
    const now = Date.now();

    if (uuid && expiration && now <= parseInt(expiration, 10)) {
      return uuid;
    } else {
      this.clearUserUUID();
      return null;
    }
  }

  /**
   * Registers a new user account.
   * @param user The user to register.
   * @returns An Observable that resolves to true if the user was successfully registered, or false if the request failed.
   * @remarks
   * The request is made with the observe: 'response' option, so the entire HttpResponse is
   * returned. The response status is then checked to see if it is 200 or 201, indicating that
   * the user was successfully registered. If the request fails, the Observable returned by
   * catchError is resolved with false.
   */
  register(user: UserRegister): Observable<boolean> {
    const url = this.baseUrl + '/auth/pass/register';

    return this.http.post(url, user, { observe: 'response' }).pipe(
      map((response) => {
        if ([200, 201].includes(response.status)) {
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  /**
   * Logs in an existing user account.
   * @param user The user to log in.
   * @returns An Observable that resolves to true if the user was successfully logged in, or false if the request failed.
   * @remarks
   * The request is made with the observe: 'response' option, so the entire HttpResponse is
   * returned. The response status is then checked to see if it is 200, indicating that
   * the user was successfully logged in. If the request fails, the Observable returned by
   * catchError is resolved with false.
   */
  login(user: UserLogin): Observable<boolean> {
    const url = this.baseUrl + '/auth/pass/login';

    return this.http.post<{ success: boolean }>(url, user, { observe: 'response', withCredentials: true }).pipe(
      map((response) => {
        if (response.body?.success) {
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }
}
