/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TestJhipster2TestModule } from '../../../test.module';
import { TinhMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix-delete-dialog.component';
import { TinhMySuffixService } from '../../../../../../main/webapp/app/entities/tinh-my-suffix/tinh-my-suffix.service';

describe('Component Tests', () => {

    describe('TinhMySuffix Management Delete Component', () => {
        let comp: TinhMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<TinhMySuffixDeleteDialogComponent>;
        let service: TinhMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [TinhMySuffixDeleteDialogComponent],
                providers: [
                    TinhMySuffixService
                ]
            })
            .overrideTemplate(TinhMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TinhMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TinhMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
