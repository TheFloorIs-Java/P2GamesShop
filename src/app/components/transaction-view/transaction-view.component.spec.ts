import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionViewComponent } from './transaction-view.component';

describe('TransactionViewComponent', () => {
  let component: TransactionViewComponent;
  let fixture: ComponentFixture<TransactionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
