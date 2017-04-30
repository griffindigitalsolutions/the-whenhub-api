// /* tslint:disable:no-unused-variable */
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
// import { RouterLinkStubDirective } from '../../../testing/router-stubs';
// import { RouterOutletStubComponent } from '../../../testing/router-stubs';
// // import { RouterModule }               from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { Router } from '@angular/router';
// import { routes } from '../../app-routing.module';

// // import {  RouterLinkStubDirective, RouterOutletStubComponent } from 'router';

// import { HeaderComponent } from './header.component';

// describe('HomeComponent', () => {
//     let component: HeaderComponent;
//     let fixture: ComponentFixture<HeaderComponent>;


//     let routerStub;


//     beforeEach(async(() => {

//         routerStub = {
//             navigate: jasmine.createSpy('navigate')
//         };        
//         TestBed.configureTestingModule({
//             providers: [{ provide: Router, useValue: routerStub } ],
//             declarations: [
//                 HeaderComponent,
//                 RouterLinkStubDirective,
//                 RouterOutletStubComponent,
//                 RouterTestingModule
//             ],
//             schemas: [CUSTOM_ELEMENTS_SCHEMA],
//             // imports: [
//             //     RouterTestingModule.withRoutes(routes)
//             // ]

//         })
//             .compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(HeaderComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// }); 