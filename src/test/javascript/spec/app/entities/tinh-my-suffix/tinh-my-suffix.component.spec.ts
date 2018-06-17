/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestJhipster2TestModule } from '../../../test.module';
import { TinhMySuffixComponent } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.component';
import { TinhMySuffixService } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.service';
import { TinhMySuffix } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.model';

describe('Component Tests', () => {

    describe('TinhMySuffix Management Component', () => {
        let comp: TinhMySuffixComponent;
        let fixture: ComponentFixture<TinhMySuffixComponent>;
        let service: TinhMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [TinhMySuffixComponent],
                providers: [
                    TinhMySuffixService
                ]
            })
            .overrideTemplate(TinhMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TinhMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TinhMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new TinhMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.tinhs[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
