import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContractInfoService {
  getAllContractInfo(contractId): Observable<any>{
    return this._httpClinet.get(API_ENDPONT);
  }

  constructor(private _httpClinet: HttpClient) {}
}
export const API_ENDPONT = "https://5ff68ff7e7164b0017e1964a.mockapi.io/template/contract-info"
