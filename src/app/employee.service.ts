import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Employee } from './Employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

  public getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.apiURL}/employee/all`);
  }

  public addEmployees(employee: Employee) : Observable<Employee>{
    return this.http.post<Employee>(`${this.apiURL}/employee/add`,employee);
  }

  public updateEmployee(employee:Employee) : Observable<Employee>{
    return this.http.put<Employee>(`${this.apiURL}/employee/update`,employee);
  }

  public deleteEmployee(id:number) : Observable<void>{
    return this.http.delete<void>(`${this.apiURL}/employee/delete/${id}`);
  }
}
