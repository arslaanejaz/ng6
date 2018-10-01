import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasnsactionsComponent } from './trasnsactions.component';

describe('TrasnsactionsComponent', () => {
  let component: TrasnsactionsComponent;
  let fixture: ComponentFixture<TrasnsactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasnsactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasnsactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
