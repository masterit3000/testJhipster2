import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TinhMySuffix } from './tinh-my-suffix.model';
import { TinhMySuffixPopupService } from './tinh-my-suffix-popup.service';
import { TinhMySuffixService } from './tinh-my-suffix.service';

@Component({
    selector: 'jhi-tinh-my-suffix-dialog',
    templateUrl: './tinh-my-suffix-dialog.component.html'
})
export class TinhMySuffixDialogComponent implements OnInit {

    tinh: TinhMySuffix;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private tinhService: TinhMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.tinh.id !== undefined) {
            this.subscribeToSaveResponse(
                this.tinhService.update(this.tinh));
        } else {
            this.subscribeToSaveResponse(
                this.tinhService.create(this.tinh));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<TinhMySuffix>>) {
        result.subscribe((res: HttpResponse<TinhMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: TinhMySuffix) {
        this.eventManager.broadcast({ name: 'tinhListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-tinh-my-suffix-popup',
    template: ''
})
export class TinhMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tinhPopupService: TinhMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.tinhPopupService
                    .open(TinhMySuffixDialogComponent as Component, params['id']);
            } else {
                this.tinhPopupService
                    .open(TinhMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
