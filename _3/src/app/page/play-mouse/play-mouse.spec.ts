import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMouse } from './play-mouse';

describe('PlayMouse', () => {
  let component: PlayMouse;
  let fixture: ComponentFixture<PlayMouse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayMouse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayMouse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
