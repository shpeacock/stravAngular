import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishlistComponent } from './finishlist.component';

describe('FinishlistComponent', () => {
  let component: FinishlistComponent;
  let fixture: ComponentFixture<FinishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
