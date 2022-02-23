import { Injectable }               from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {
    API_LIST
}                                   from "../_const/layout.const";
import { DefaultResponse }          from "../../_model/app.model";

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    constructor(private http: HttpClient) {}

    getMovieListService() {
        return this.http.get<DefaultResponse>(`${API_LIST}/films`)
    }

    getCharacterListService(param : any) {
        return this.http.get<DefaultResponse>(`${API_LIST}/people/?page=` +param)
    }

    getDetailService(param : any) {
        return this.http.get<DefaultResponse>(`${API_LIST}/people/` +param)
    }

}
