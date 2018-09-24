import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxobserableComponent } from './rxobserable.component';

describe('RxobserableComponent', () => {
  let component: RxobserableComponent;
  let fixture: ComponentFixture<RxobserableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxobserableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxobserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
