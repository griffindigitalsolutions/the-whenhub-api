import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FooterComponent } from './ui-elements/footer/footer.component';
import { HeaderComponent } from './ui-elements/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from './services/config/config.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        ConfigService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
