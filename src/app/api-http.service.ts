// Angular Modules 
import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable() 
export class ApiHttpService{ 
  constructor(private http: HttpClient ) { }
  
  baseUrl = 'http://pat.infolab.ecam.be:60842';
  // baseUrl = 'http://localhost:3000';

  public get(url: string, options?: any) {
    return this.http.get(this.baseUrl + url, options); 
  }

  public post(url: string, data: any, options?: any) {
    return this.http.post(this.baseUrl + url, data, options);
  }

  public put(url: string, data: any, options?: any) {
    return this.http.put(this.baseUrl + url, data, options);
  }

  public patch(url: string, data: any, options?: any) {
    return this.http.patch(this.baseUrl + url, data, options);
  }

  public delete(url: string, options?: any) {
    return this.http.delete(this.baseUrl + url, options);
  }

}