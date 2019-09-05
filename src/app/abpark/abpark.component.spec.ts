import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbparkComponent } from './abpark.component';

describe('AbparkComponent', () => {
  let component: AbparkComponent;
  let fixture: ComponentFixture<AbparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
