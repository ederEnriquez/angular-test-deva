import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private http: HttpClient, 
    @Inject('serviceUrl') private serviceUrl: string
    ) { }

  postContactForm(contactFormData: any):Observable<unknown> {
    return this.http.post(this.serviceUrl, contactFormData);
  }
}
