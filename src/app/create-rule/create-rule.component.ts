/*import { Component } from '@angular/core';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrl: './create-rule.component.css'
})
export class CreateRuleComponent {

}*/
import { Component } from '@angular/core';
import { RuleService } from '../services/rule.service';
//import { RuleService } from '../../services/rule.service';

@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.css']
})
export class CreateRuleComponent {
  ruleString: string = '';
  astNode: any;

  constructor(private ruleService: RuleService) {}

  onSubmit() {
    this.ruleService.createRule(this.ruleString).subscribe(
      (response) => {
        this.astNode = response; // Display the returned AST node
      },
      (error) => {
        console.error('Error creating rule:', error);
      }
    );
  }
}

