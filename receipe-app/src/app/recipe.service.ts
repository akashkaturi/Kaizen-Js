import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    private apiUrl = 'https://api.edamam.com/api/recipes/v2';
    private appId = '2c3a0900';
    private appKey = '94ebd9c3ae44efc256db98e674c80959';

    constructor(private http: HttpClient) {
    }

    searchRecipes(query: string): Observable<any> {
        const params = new HttpParams()
            .set('app_id', this.appId)
            .set('app_key', this.appKey)
            .set('q', query)
            .set('type', 'public')
            .set('to', '10'); // Limit to 10 recipes

        return this.http.get<any>(this.apiUrl, {params});
    }
}
