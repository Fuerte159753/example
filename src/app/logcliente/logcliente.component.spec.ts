import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogclienteComponent } from './logcliente.component';

describe('LogclienteComponent', () => {
  let component: LogclienteComponent;
  let fixture: ComponentFixture<LogclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogclienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
