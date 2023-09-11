import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moment } from '../Moment';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  private baseApiURl = environment.baseApiUrl;
  private apiUrl = '${this.baseApiURl}api/moments';

  constructor( private http: HttpClient) {}

    createMoment(formatDate: FormData): Observable<FormData>{
        return  this.http.post<FormData>(this.apiUrl, formatDate)
    }
   
}
