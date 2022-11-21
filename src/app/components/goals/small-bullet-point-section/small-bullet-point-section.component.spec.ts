import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmallBulletPointSectionComponent } from './small-bullet-point-section.component';

describe('SmallBulletPointSectionComponent', () => {
  let component: SmallBulletPointSectionComponent;
  let fixture: ComponentFixture<SmallBulletPointSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBulletPointSectionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmallBulletPointSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
