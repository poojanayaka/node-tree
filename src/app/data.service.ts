import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService{
    private url=''
    constructor(private httpClient: HttpClient){}

    getService():any{
       return this.httpClient.get("/assets/node-tree.json");
    }
}

