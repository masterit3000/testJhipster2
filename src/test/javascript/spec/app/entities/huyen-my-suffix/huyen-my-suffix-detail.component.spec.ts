/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TestJhipster2TestModule } from '../../../test.module';
import { HuyenMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix-detail.component';
import { HuyenMySuffixService } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix.service';
import { HuyenMySuffix } from '../../../../../../main/webapp/app/entities/huyen-my-suffix/huyen-my-suffix.model';

describe('Component Tests', () => {

    describe('HuyenMySuffix Management Detail Component', () => {
        let comp: HuyenMySuffixDetailComponent;
        let fixture: ComponentFixture<HuyenMySuffixDetailComponent>;
        let service: HuyenMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [HuyenMySuffixDetailComponent],
                providers: [
                    HuyenMySuffixService
                ]
            })
            .overrideTemplate(HuyenMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HuyenMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(HuyenMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new HuyenMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.huyen).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
