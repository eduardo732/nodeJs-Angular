import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url;
    }

    testService(){
        return 'Probando el servicio de angular';
    }

    saveProject(project: Project): Observable<any>{
        let params= JSON.stringify(project);
        let headers= new HttpHeaders().set('Content-Type','application/json' );

        return this._http.post(this.url+'saveProject', params, {headers:headers});
    }
    getProjects(): Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json' );

        return this._http.get(this.url+'getAllProjects', {headers:headers});
    }
    getProject(id): Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json' );

        return this._http.get(this.url+'getProject/'+id, {headers:headers});
    }
    deleteProject(id): Observable<any>{
        let headers= new HttpHeaders().set('Content-Type','application/json' );
        return this._http.delete(this.url+'deleteProject/'+id, {headers:headers});
    }
    updateProject(project): Observable<any>{
        let params= JSON.stringify(project);
        let headers= new HttpHeaders().set('Content-Type','application/json' );
        return this._http.put(this.url+'updateProject/'+project._id, params,{headers:headers});
    }
}