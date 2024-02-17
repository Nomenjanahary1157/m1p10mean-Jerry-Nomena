import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonnelleComponent } from './gestion-personnelle.component';

describe('GestionPersonnelleComponent', () => {
  let component: GestionPersonnelleComponent;
  let fixture: ComponentFixture<GestionPersonnelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPersonnelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPersonnelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
