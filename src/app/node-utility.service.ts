import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {
  constructor(private httpClient:HttpClient) { 
    
  }
  url:string="http://172.16.8.103:5000/";
  sayHai():Observable<any>{
    return this.httpClient.get(this.url+"sayHai");
  }  
  add(x:number,y:number):Observable<any>{
    return this.httpClient.get(this.url+"add?num1="+x+"&num2="+y);
  }  
  insert(username:string,email:string,password:string,mobile:string,gender:string):Observable<any>{
    return this.httpClient.get(this.url+"insert?username="+username+"&email="+email+"&password="+password+"&mobile="+mobile+"&gender="+gender);
  }
  update(email:string,newpass:string):Observable<any>{
    return this.httpClient.get(this.url+"update?email="+email+"&newpass="+newpass);
  }
  display():Observable<any>{
    return this.httpClient.get(this.url+"findAll");
  }  
  display1(username:string):Observable<any>
{
  return this.httpClient.get(this.url+"findOne?username="+username);
}
ins(u:string,cardNumber:string,expiryDate:string,cvv:string):Observable<any>{

  return this.httpClient.get(this.url+"ins?user="+u+"&cardNumber="+cardNumber+"&expiryDate="+expiryDate+"&cvv="+cvv);
}
  retrieve(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"login1?email="+email+"&password="+password);
  }
  delete(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"delete1?email="+email+"&password="+password);
  }    
  

}

