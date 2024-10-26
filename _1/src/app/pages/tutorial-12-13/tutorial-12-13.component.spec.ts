import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial1213Component } from './tutorial-12-13.component';

describe('Test7Component', () => {
  let component: Tutorial1213Component;
  let fixture: ComponentFixture<Tutorial1213Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutorial1213Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tutorial1213Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
