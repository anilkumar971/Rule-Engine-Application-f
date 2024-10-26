/*import { Component } from '@angular/core';

@Component({
  selector: 'app-evaluate-rule',
  templateUrl: './evaluate-rule.component.html',
  styleUrl: './evaluate-rule.component.css'
})
export class EvaluateRuleComponent {

}*/

import { Component } from '@angular/core';
import { RuleService } from '../services/rule.service';
//import { RuleService } from '../../services/rule.service';

@Component({
  selector: 'app-evaluate-rule',
  templateUrl: './evaluate-rule.component.html',
  styleUrls: ['./evaluate-rule.component.css']
})
export class EvaluateRuleComponent {
  ruleString: string = '';
  data: string = '';
  evaluationResult: boolean | null = null;

  constructor(private ruleService: RuleService) {}

  onEvaluate() {
    const parsedData = JSON.parse(this.data); // Parse the JSON data
    this.ruleService.evaluateRule(parsedData, this.ruleString).subscribe(
      (result) => {
        this.evaluationResult = result;
      },
      (error) => {
        console.error('Error evaluating rule:', error);
      }
    );
  }
}

