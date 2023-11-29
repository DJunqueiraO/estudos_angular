import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial16Component } from './tutorial-16.component';

describe(
'Test7Component', 
    () => {
    let component: Tutorial16Component;
    let fixture: ComponentFixture<Tutorial16Component>;
    beforeEach(
            async () => {
            await TestBed
                .configureTestingModule(
                    {
                        imports: [Tutorial16Component]
                    }
                )
                .compileComponents();
            fixture = TestBed.createComponent(Tutorial16Component);
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