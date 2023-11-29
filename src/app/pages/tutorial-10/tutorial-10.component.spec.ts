import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial10Component } from './tutorial-10.component';

describe('Test7Component', () => {
  let component: Tutorial10Component;
  let fixture: ComponentFixture<Tutorial10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutorial10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tutorial10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
