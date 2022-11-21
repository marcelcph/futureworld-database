import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkAndEconomicGrowthPage } from './work-and-economic-growth.page';

describe('WorkAndEconomicGrowthPage', () => {
  let component: WorkAndEconomicGrowthPage;
  let fixture: ComponentFixture<WorkAndEconomicGrowthPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAndEconomicGrowthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkAndEconomicGrowthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
