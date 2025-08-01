import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveHtmlComponent } from './interactive-html.component';

describe('InteractiveHtmlComponent', () => {
  let component: InteractiveHtmlComponent;
  let fixture: ComponentFixture<InteractiveHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveHtmlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
