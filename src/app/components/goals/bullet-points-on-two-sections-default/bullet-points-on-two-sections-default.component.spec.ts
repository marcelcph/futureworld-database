import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BulletPointsOnTwoSectionsDefaultComponent } from './bullet-points-on-two-sections-default.component';

describe('BulletPointsOnTwoSectionsDefaultComponent', () => {
  let component: BulletPointsOnTwoSectionsDefaultComponent;
  let fixture: ComponentFixture<BulletPointsOnTwoSectionsDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletPointsOnTwoSectionsDefaultComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BulletPointsOnTwoSectionsDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
