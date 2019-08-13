import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoTeAtendimosComponent } from './como-te-atendimos.component';

describe('ComoTeAtendimosComponent', () => {
  let component: ComoTeAtendimosComponent;
  let fixture: ComponentFixture<ComoTeAtendimosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoTeAtendimosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoTeAtendimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
