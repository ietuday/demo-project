import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { OrderSheetComponent } from './order-sheet/order-sheet.component';

export const routes: Routes = [
    { path: '', component: OrderSheetComponent },
    { path: 'questions', component: QuestionsComponent }


];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
