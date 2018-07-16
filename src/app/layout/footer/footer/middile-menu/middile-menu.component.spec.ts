import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddileMenuComponent } from './middile-menu.component';

describe('MiddileMenuComponent', () => {
  let component: MiddileMenuComponent;
  let fixture: ComponentFixture<MiddileMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddileMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
