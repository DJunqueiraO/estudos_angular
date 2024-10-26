import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial14Component } from './tutorial-14.component';

describe(
  'Test7Component', 
  () => {
    let component: Tutorial14Component;
    let fixture: ComponentFixture<Tutorial14Component>;
    beforeEach(
      async () => {
        await TestBed
          .configureTestingModule(
            {
              imports: [Tutorial14Component]
            }
          )
          .compileComponents();
        fixture = TestBed.createComponent(Tutorial14Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }
    );

    it(
      'should create', 
      () => {
        expect(component).toBeTruthy();
      }
    );
  }
);
