import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { map } from 'rxjs/operators';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.FILMS_API_URL}/movie/popular${environment.API_KEY}`).pipe(map(res=> res.json()))
  }
}
