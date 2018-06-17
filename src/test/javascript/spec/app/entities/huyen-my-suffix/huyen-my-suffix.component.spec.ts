/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestJhipster2TestModule } from '../../../test.module';
import { HuyenMySuffixComponent } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix.component';
import { HuyenMySuffixService } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix.service';
import { HuyenMySuffix } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix.model';

describe('Component Tests', () => {

    describe('HuyenMySuffix Management Component', () => {
        let comp: HuyenMySuffixComponent;
        let fixture: ComponentFixture<HuyenMySuffixComponent>;
        let service: HuyenMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [HuyenMySuffixComponent],
                providers: [
                    HuyenMySuffixService
                ]
            })
            .overrideTemplate(HuyenMySuffixComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HuyenMySuffixComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HuyenMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN
                const headers = new HttpHeaders().append('link', 'link;link');
                spyOn(service, 'query').and.returnValue(Observable.of(new HttpResponse({
                    body: [new HuyenMySuffix(123)],
                    headers
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.query).toHaveBeenCalled();
                expect(comp.huyens[0]).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
