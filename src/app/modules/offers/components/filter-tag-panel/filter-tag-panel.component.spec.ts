import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTagPanelComponent } from './filter-tag-panel.component';

describe('FilterTagPanelComponent', () => {
  let component: FilterTagPanelComponent;
  let fixture: ComponentFixture<FilterTagPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTagPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTagPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
