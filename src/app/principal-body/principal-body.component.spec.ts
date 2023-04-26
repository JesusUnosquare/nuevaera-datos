import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalBodyComponent } from './principal-body.component';

describe('PrincipalBodyComponent', () => {
  let component: PrincipalBodyComponent;
  let fixture: ComponentFixture<PrincipalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
