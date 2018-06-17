/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TestJhipster2TestModule } from '../../../test.module';
import { XaMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix-detail.component';
import { XaMySuffixService } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.service';
import { XaMySuffix } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.model';

describe('Component Tests', () => {

    describe('XaMySuffix Management Detail Component', () => {
        let comp: XaMySuffixDetailComponent;
        let fixture: ComponentFixture<XaMySuffixDetailComponent>;
        let service: XaMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [XaMySuffixDetailComponent],
                providers: [
                    XaMySuffixService
                ]
            })
            .overrideTemplate(XaMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(XaMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(XaMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new XaMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.xa).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
