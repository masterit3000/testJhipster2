/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestJhipster2TestModule } from '../../../test.module';
import { XaMySuffixComponent } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.component';
import { XaMySuffixService } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.service';
import { XaMySuffix } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.model';

describe('Component Tests', () => {

    describe('XaMySuffix Management Component', () => {
        let comp: XaMySuffixComponent;
        let fixture: ComponentFixture<XaMySuffixComponent>;
        let service: XaMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [XaMySuffixComponent],
                providers: [
                    XaMySuffixService
                ]
            })
            .overrideTemplate(XaMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(XaMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(XaMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new XaMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.xas[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
