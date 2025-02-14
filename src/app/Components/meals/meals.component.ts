import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { MealsService } from '../../services/meals.service';

@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  constructor(private _mealsService:MealsService,private _activatedRoute:ActivatedRoute)  {}


  categories:any;
  meals:any;

  ngOnInit(): void {
    if (typeof document !='undefined'){

      this._mealsService.getAllCategories().subscribe(
        (res)=>{this.categories=res.meals });

     

        this._activatedRoute.paramMap.subscribe(
          (params)=>{
            const categoryName =params.get('categoryName');

            if(categoryName){
            this._mealsService.getMealsByCategory(categoryName).subscribe((res)=>{this.meals=res.meals})
            }
          }
        )
        
      }}}

        


