import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {
  }

  public send<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {responseType: 'json'});
  }
}
