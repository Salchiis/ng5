import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeStadisticsComponent } from './tree-stadistics.component';

describe('TreeStadisticsComponent', () => {
  let component: TreeStadisticsComponent;
  let fixture: ComponentFixture<TreeStadisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeStadisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
