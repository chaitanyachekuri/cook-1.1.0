import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";


@Injectable()
export class ApiManagerService {
  public static readonly GET = 'get';
  public static readonly POST = 'post';
  public static readonly register = '/register';

  constructor(private http: HttpClient) {
  }

  fetchData(url, type, body?, queryParams?:any[]):Observable<any>{
    let result:Observable<any>;
    let finalUrl = environment.url + url;
    if(finalUrl.includes('~~') && queryParams && queryParams.length > 0){
      queryParams.forEach(v =>{
        finalUrl = finalUrl.replace('~~', v);
      })
    }
    console.log(finalUrl);
    if(type == ApiManagerService.GET){
      result = this.http.get(finalUrl, {responseType: 'text'})
    }else if(type == ApiManagerService.POST){
      result = this.http.post(finalUrl, body,this.getOptionsWithRequestOptions(true, false));
    }

    result.toPromise().then((value:Response) => {
      console.log(value);
    });
    return result;
  }

    getOptionsWithRequestOptions(addHeader: boolean = false, isResponseBlob: boolean = false, addHeaderPlainText?: boolean) {
        const customHeaders = new Headers();
        if (addHeader) {
            customHeaders.append('Content-Type', 'application/json');
        }
        if(addHeaderPlainText){
            customHeaders.append('Content-Type', 'text/plain');
        }

        customHeaders.append('Accept-Language', 'en-US');

        let requestOptions: any = { headers: customHeaders, withCredentials:true };

        return requestOptions
    }

}
