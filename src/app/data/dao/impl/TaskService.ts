
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TaskDAO} from "../interface/TaskDAO";
import {Task} from "../../../model/Task";
import {TaskSearchValues} from "../search/SearchObjects";
import {Observable} from "rxjs";


// класс реализовывает методы доступа к данным с помощью RESTful запросов в формате JSON.
// напоминает паттер Фасад (Facade) - выдает только то, что нужно для функционала UI

// JSON формируется автоматически для параметров и результатов

@Injectable({
  providedIn: 'root'
})
export class TaskService implements TaskDAO {

  url = 'http://localhost:8080/task';

  constructor(private httpClient: HttpClient // для выполнения HTTP запросов
  ) {}

  findTasks(taskSearchValues: TaskSearchValues) {
    return this.httpClient.post<Task[]>(this.url + '/search', taskSearchValues);
  }

  add(t: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url + '/add', t);
  }

  delete(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(this.url + '/delete/' + id);
  }

  findById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.url + '/id/' + id);
  }

  findAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url + '/all');
  }

  update(t: Task): Observable<Task> {
    return this.httpClient.put<Task>(this.url + '/update', t);
  }


}
