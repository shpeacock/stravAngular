import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MestuffComponent } from './mestuff.component';

describe('MestuffComponent', () => {
  let component: MestuffComponent;
  let fixture: ComponentFixture<MestuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MestuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MestuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
