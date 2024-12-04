import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StatDAO} from "../interface/StatDAO";
import {Stat} from "../../../model/Stat";



// класс реализовывает методы доступа к данным с помощью RESTful запросов в формате JSON
// напоминает паттер Фасад (Facade) - выдает только то, что нужно для функционала

@Injectable({
  providedIn: 'root'
})

// класс не реализовывает и не наследует, т.к. у него только 1 метод
export class StatService implements StatDAO{

  url = 'http://localhost:8080/stat';

  constructor(private http: HttpClient // для выполнения HTTP запросов
  ) { }

  // общая статистика
  getOverallStat(): Observable<Stat> {
    return this.http.get<Stat>(this.url);
  }


}
