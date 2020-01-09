import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoArray :AngularFireList<any>;
  constructor(private firedatabasedb:AngularFireDatabase) { }
  getToDoList(){
    this.toDoArray=this.firedatabasedb.list('titles');
    return this.toDoArray;
  }
  addTitle(title: string){
    this.toDoArray.push({
      title: title,
      isChecked: false
    });
  }

  checkOrUnCheckTitle($key: string,flag: boolean){
    this.toDoArray.update($key, {isChecked:flag});
  }

  removeTitle($key: string){
    this.toDoArray.remove($key);
  }
  
}
