import { Routes } from '@angular/router';
import { MealLayoutComponent } from './Components/meal-layout/meal-layout.component';
import { MealsComponent } from './Components/meals/meals.component';
import { MealDetailsComponent } from './Components/meal-details/meal-details.component';

export const routes: Routes = [

    {path:'',component:MealLayoutComponent,
       children:[
        {path:'' ,redirectTo:'category/all',pathMatch:'full'},
        {path:'category/:categoryName',component:MealsComponent},
        {path:'mealdetails/:mealId',component:MealDetailsComponent},
      ]
    }
];
