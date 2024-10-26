/*import { Component } from '@angular/core';

@Component({
  selector: 'app-combine-rule',
  templateUrl: './combine-rule.component.html',
  styleUrl: './combine-rule.component.css'
})
export class CombineRuleComponent {

}*/

import { Component } from '@angular/core';
import { RuleService } from '../services/rule.service';
//import { RuleService } from '../../services/rule.service';

@Component({
  selector: 'app-combine-rule',
  templateUrl: './combine-rule.component.html',
  styleUrls: ['./combine-rule.component.css']
})
export class CombineRuleComponent {
  rules: string = '';
  combinedAstNode: any;

  constructor(private ruleService: RuleService) {}

  onCombine() {
    const rulesArray = this.rules.split(',').map(rule => rule.trim());
    this.ruleService.combineRules(rulesArray).subscribe(
      (response) => {
        this.combinedAstNode = response;
      },
      (error) => {
        console.error('Error combining rules:', error);
      }
    );
  }
}
