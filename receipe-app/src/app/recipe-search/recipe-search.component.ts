import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'app-recipe-search',
    templateUrl: './recipe-search.component.html',
    styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
    }

    responseRecepies: any;

    searchTerm: string = '';
    @Output() recepies: EventEmitter<any> = new EventEmitter<any>()

    search(): void {
        if (this.searchTerm) {
            this.recipeService.searchRecipes(this.searchTerm).subscribe(
                (response) => {
                    this.recepies.emit()
                    console.log(response); // Handle the response as needed
                },
                (error) => {
                    console.error('Error fetching recipes:', error);
                }
            );
        }
    }


}
