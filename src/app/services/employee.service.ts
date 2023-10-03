import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = "http://localhost:1616";


@Injectable({
  providedIn: 'root',
})



export class EmployeeService {


  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
   return this._http.post(baseURL +'/stocks', data);
   //return this._http.post('http://localhost:3000/stocks', data);
   //return this._http.post("https://my-json-server.typicode.com/waytologic/arpino"+'/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
  return this._http.put( baseURL+`/stocks/${id}`, data);
  //return this._http.put(`http://localhost:3000/stocks/${id}`, data);
  //return this._http.put("https://my-json-server.typicode.com/waytologic/arpino"+`/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get( baseURL + '/stocks');
    // return this._http.get('http://localhost:3000/stocks');
    // return this._http.get("https://my-json-server.typicode.com/waytologic/arpino"+'/employees');
  }

  getview(id: number): Observable<any> {
    return this._http.get( baseURL + '/stocks/'+ id);
    //return this._http.get('http://localhost:3000/stocks/'+ id);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete( baseURL +`/stocks/${id}`);
  //return this._http.delete(`http://localhost:3000/stocks/${id}`);
  //return this._http.delete("https://my-json-server.typicode.com/waytologic/arpino"+`/employees/${id}`);
  }
}
