/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TestJhipster2TestModule } from '../../../test.module';
import { TinhDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/tinh/tinh-delete-dialog.component';
import { TinhService } from '../../../../../../main/webapp/app/entities/tinh/tinh.service';

describe('Component Tests', () => {

    describe('Tinh Management Delete Component', () => {
        let comp: TinhDeleteDialogComponent;
        let fixture: ComponentFixture<TinhDeleteDialogComponent>;
        let service: TinhService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [TinhDeleteDialogComponent],
                providers: [
                    TinhService
                ]
            })
            .overrideTemplate(TinhDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TinhDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(TinhService);
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
