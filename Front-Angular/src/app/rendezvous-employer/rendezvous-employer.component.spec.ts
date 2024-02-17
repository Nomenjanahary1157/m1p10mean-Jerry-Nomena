import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousEmployerComponent } from './rendezvous-employer.component';

describe('RendezvousEmployerComponent', () => {
  let component: RendezvousEmployerComponent;
  let fixture: ComponentFixture<RendezvousEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RendezvousEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendezvousEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
