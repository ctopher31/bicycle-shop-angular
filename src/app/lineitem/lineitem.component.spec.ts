import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineitemComponent } from './lineitem.component';

describe('LineitemComponent', () => {
  let component: LineitemComponent;
  let fixture: ComponentFixture<LineitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
