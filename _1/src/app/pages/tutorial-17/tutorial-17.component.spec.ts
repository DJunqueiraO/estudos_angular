import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial17Component } from './tutorial-17.component';

describe(
    'Tutorial17Component', 
    () => {
    let component: Tutorial17Component;
    let fixture: ComponentFixture<Tutorial17Component>;
    beforeEach(
            async () => {
            await TestBed
                .configureTestingModule(
                    {
                        imports: [Tutorial17Component]
                    }
                )
                .compileComponents();
            fixture = TestBed.createComponent(Tutorial17Component);
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