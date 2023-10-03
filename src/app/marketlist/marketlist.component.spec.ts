import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketlistComponent } from './marketlist.component';

describe('MarketlistComponent', () => {
  let component: MarketlistComponent;
  let fixture: ComponentFixture<MarketlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
