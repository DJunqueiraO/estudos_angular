import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tutorial11Component } from './tutorial-11.component';

describe('Test7Component', () => {
  let component: Tutorial11Component;
  let fixture: ComponentFixture<Tutorial11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tutorial11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tutorial11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
