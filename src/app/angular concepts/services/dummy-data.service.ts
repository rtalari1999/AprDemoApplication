import { HttpClient, HttpHeaders } from '@angular/common/http';// import httpClient i.e methods 
import { Injectable} from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor(private http: HttpClient) { }

  getResponse(){
    return this.http.get(`http://localhost:3000/posts`);
  }

  postData(body: any){
    return this.http.post(`http://localhost:3000/posts`,body);
  }

  deletePostsData(id: string){
    //id=1
    return this.http.delete(`http://localhost:3000/posts/${id}`);
  }

  updateData(body: any, id: string){
    let header = new HttpHeaders({
      name:'Raju'
    })
    return this.http.put(`http://localhost:3000/posts/${id}`,body);
  }
}








