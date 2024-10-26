/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }*/


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { EvaluateRuleComponent } from './evaluate-rule/evaluate-rule.component';
import { CombineRuleComponent } from './combine-rule/combine-rule.component';

//import { CreateRuleComponent } from './components/create-rule/create-rule.component';
//import { CombineRuleComponent } from './components/combine-rule/combine-rule.component';
//import { EvaluateRuleComponent } from './components/evaluate-rule/evaluate-rule.component';

const routes: Routes = [
  { path: 'create-rule', component: CreateRuleComponent },
  { path: 'combine-rule', component: CombineRuleComponent },
  { path: 'evaluate-rule', component: EvaluateRuleComponent },
  { path: '', redirectTo: '/create-rule', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
