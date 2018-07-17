import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeparamsComponent } from './takeparams.component';

describe('TakeparamsComponent', () => {
  let component: TakeparamsComponent;
  let fixture: ComponentFixture<TakeparamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeparamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeparamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
