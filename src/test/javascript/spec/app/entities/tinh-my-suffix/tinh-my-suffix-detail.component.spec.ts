/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { TestJhipster2TestModule } from '../../../test.module';
import { TinhMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix-detail.component';
import { TinhMySuffixService } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.service';
import { TinhMySuffix } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.model';

describe('Component Tests', () => {

    describe('TinhMySuffix Management Detail Component', () => {
        let comp: TinhMySuffixDetailComponent;
        let fixture: ComponentFixture<TinhMySuffixDetailComponent>;
        let service: TinhMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [TinhMySuffixDetailComponent],
                providers: [
                    TinhMySuffixService
                ]
            })
            .overrideTemplate(TinhMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TinhMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TinhMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new TinhMySuffix(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.tinh).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
