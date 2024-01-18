import {Component, OnInit} from '@angular/core';
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
    searchTerm: string = '';

    search(): void {
        if (this.searchTerm) {
            this.recipeService.searchRecipes(this.searchTerm).subscribe(
                (response) => {
                    console.log(response); // Handle the response as needed
                },
                (error) => {
                    console.error('Error fetching recipes:', error);
                }
            );
        }
    }

}
