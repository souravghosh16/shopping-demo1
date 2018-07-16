import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLayputComponent } from './footer-layput.component';

describe('FooterLayputComponent', () => {
  let component: FooterLayputComponent;
  let fixture: ComponentFixture<FooterLayputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLayputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLayputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
