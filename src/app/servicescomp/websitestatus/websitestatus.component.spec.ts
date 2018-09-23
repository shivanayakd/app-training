import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitestatusComponent } from './websitestatus.component';

describe('WebsitestatusComponent', () => {
  let component: WebsitestatusComponent;
  let fixture: ComponentFixture<WebsitestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
