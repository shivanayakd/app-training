import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsubinterComponent } from './csubinter.component';

describe('CsubinterComponent', () => {
  let component: CsubinterComponent;
  let fixture: ComponentFixture<CsubinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsubinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsubinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
