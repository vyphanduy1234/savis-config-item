import { SettingModel } from './../models/setting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemSettingService {

  constructor(private _httpClinet: HttpClient) { }

  getAllTemplateData(): Observable<SettingModel[]>{
    return <Observable<SettingModel[]>>this._httpClinet.get(API_ENDPONT);
  }

  updateTemplate(component): Observable<any>{
    return this._httpClinet.put(API_ENDPONT+ `/${component.id}` ,component);
  }

  addTemplate(component): Observable<any>{
    return this._httpClinet.post(API_ENDPONT,component);
  }

  removeTemplate(id): Observable<any>{
    return this._httpClinet.delete(API_ENDPONT+ `/${id}`);
  }
}

export const API_ENDPONT = "https://5ff68ff7e7164b0017e1964a.mockapi.io/template/template-data"

