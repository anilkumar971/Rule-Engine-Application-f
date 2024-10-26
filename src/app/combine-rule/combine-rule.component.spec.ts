import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineRuleComponent } from './combine-rule.component';

describe('CombineRuleComponent', () => {
  let component: CombineRuleComponent;
  let fixture: ComponentFixture<CombineRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CombineRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
