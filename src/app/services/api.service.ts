import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  public url = "https://valorant-api.com/v1/"
  constructor(public http: HttpClient) { }

  getAgents(){
    return this.http.get(this.url + 'agents?language=pt-BR')
  }

  getAgent(uuid){
    return this.http.get(this.url + 'agents/'+uuid+'?language=pt-BR')
  }
}
