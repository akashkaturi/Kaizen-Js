import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import {FormsModule} from "@angular/forms";
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipeSearchComponent,
        RecipeListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
