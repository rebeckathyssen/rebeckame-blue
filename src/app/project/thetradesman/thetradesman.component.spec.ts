import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThetradesmanComponent } from './thetradesman.component';

describe('ThetradesmanComponent', () => {
  let component: ThetradesmanComponent;
  let fixture: ComponentFixture<ThetradesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThetradesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThetradesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
