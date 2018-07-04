import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinterComponent } from './cinter.component';

describe('CinterComponent', () => {
  let component: CinterComponent;
  let fixture: ComponentFixture<CinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
