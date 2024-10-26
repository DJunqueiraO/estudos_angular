import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tutorial15Component } from './tutorial-15.component';

describe(
'Test7Component', 
    () => {
    let component: Tutorial15Component;
    let fixture: ComponentFixture<Tutorial15Component>;
    beforeEach(
            async () => {
            await TestBed
                .configureTestingModule(
                    {
                        imports: [Tutorial15Component]
                    }
                )
                .compileComponents();
            fixture = TestBed.createComponent(Tutorial15Component);
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