import {Injectable, OnInit} from "@angular/core";
import io from 'socket.io-client';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class ApiEmitterServcie implements OnInit{
  public socket:any;
  public static readonly connect = 'connected';
  public static readonly authenticate = 'authenticate';
  public static readonly authenticated = 'authenticated';

  ngOnInit(): void {
  }

  recieveEvent(event):Observable<any>{
    return new Observable(observer =>{
      this.socket = io(environment.url);
      this.socket.on(event, (data) =>{
        console.log(data);
        observer.next(data);
      });
      return ()=>{
        this.socket.disconnect();
      }
    });
  }

  sendEvent(event:string, payload?:any){
    this.socket.emit(event,payload)
  }

}
