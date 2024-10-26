/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private baseUrl = 'http://localhost:8089/api/rules';

  constructor(private http: HttpClient) {}

  createRule(ruleString: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, { ruleString });
  }

  combineRules(rules: string[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/combine`, rules);
  }

  evaluateRule(data: any, ruleString: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/evaluate?ruleString=${ruleString}`, data);
  }
}
