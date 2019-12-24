import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinekdCompComponent } from './linekd-comp.component';

describe('LinekdCompComponent', () => {
  let component: LinekdCompComponent;
  let fixture: ComponentFixture<LinekdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinekdCompComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinekdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
