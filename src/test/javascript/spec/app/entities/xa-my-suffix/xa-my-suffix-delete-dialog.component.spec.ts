/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { TestJhipster2TestModule } from '../../../test.module';
import { XaMySuffixDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix-delete-dialog.component';
import { XaMySuffixService } from '../../../../../../main/webapp/app/entities/xa-my-suffix/xa-my-suffix.service';

describe('Component Tests', () => {

    describe('XaMySuffix Management Delete Component', () => {
        let comp: XaMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<XaMySuffixDeleteDialogComponent>;
        let service: XaMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [TestJhipster2TestModule],
                declarations: [XaMySuffixDeleteDialogComponent],
                providers: [
                    XaMySuffixService
                ]
            })
            .overrideTemplate(XaMySuffixDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(XaMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(XaMySuffixService);
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
