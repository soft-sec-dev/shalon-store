import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchingProductComponent } from './searching-product.component';

describe('SearchingProductComponent', () => {
  let component: SearchingProductComponent;
  let fixture: ComponentFixture<SearchingProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchingProductComponent]
    });
    fixture = TestBed.createComponent(SearchingProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
