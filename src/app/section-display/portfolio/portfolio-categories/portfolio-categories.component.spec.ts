import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioCategoriesComponent } from './portfolio-categories.component';

describe('PortfolioCategoriesComponent', () => {
  let component: PortfolioCategoriesComponent;
  let fixture: ComponentFixture<PortfolioCategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
