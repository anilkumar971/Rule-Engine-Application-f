/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleFormComponent } from './components/rule-form/rule-form.component';
import { RuleListComponent } from './components/rule-list/rule-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleFormComponent,
    RuleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRuleComponent } from './create-rule/create-rule.component';
import { CombineRuleComponent } from './combine-rule/combine-rule.component';
import { EvaluateRuleComponent } from './evaluate-rule/evaluate-rule.component';
//import { CreateRuleComponent } from './components/create-rule/create-rule.component';
//import { CombineRuleComponent } from './components/combine-rule/combine-rule.component';
//import { EvaluateRuleComponent } from './components/evaluate-rule/evaluate-rule.component';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CreateRuleComponent,
    CombineRuleComponent,
    EvaluateRuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
