import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesAddressComponent } from './breweries-address.component';

describe('BreweriesAddressComponent', () => {
  let component: BreweriesAddressComponent;
  let fixture: ComponentFixture<BreweriesAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweriesAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
