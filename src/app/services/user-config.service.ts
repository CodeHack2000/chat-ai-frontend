import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserConfigApiResponse } from '../models/user-config.model';

@Injectable({
  providedIn: 'root'
})
export class UserConfigService {
  private baseUrl = 'http://localhost:3100';

  constructor(private http: HttpClient) { }

  /**
   * Updates the user's image on the server.
   * @param image The image to use as the user's new profile image.
   * @returns An Observable that resolves to a UserConfigApiResponse if the request is successful, or an error if not.
   * @remarks
   * The request is made with the withCredentials option set to true, so the request is sent
   * with the user's session cookie.
   */
  updateUserImage(image: File): Observable<UserConfigApiResponse> {
    console.log(image);
    const url = this.baseUrl + '/users/updateUserImage';
    const formData = new FormData();
    formData.append('avatar', image, image.name);

    return this.http.put<UserConfigApiResponse>(url, formData, { withCredentials: true });
  }
}
