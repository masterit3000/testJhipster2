import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { XaMySuffix } from './xa-my-suffix.model';
import { XaMySuffixPopupService } from './xa-my-suffix-popup.service';
import { XaMySuffixService } from './xa-my-suffix.service';
import { HuyenMySuffix, HuyenMySuffixService } from '../huyen-my-suffix';

@Component({
    selector: 'jhi-xa-my-suffix-dialog',
    templateUrl: './xa-my-suffix-dialog.component.html'
})
export class XaMySuffixDialogComponent implements OnInit {

    xa: XaMySuffix;
    isSaving: boolean;

    huyens: HuyenMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private xaService: XaMySuffixService,
        private huyenService: HuyenMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.huyenService.query()
            .subscribe((res: HttpResponse<HuyenMySuffix[]>) => { this.huyens = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.xa.id !== undefined) {
            this.subscribeToSaveResponse(
                this.xaService.update(this.xa));
        } else {
            this.subscribeToSaveResponse(
                this.xaService.create(this.xa));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<XaMySuffix>>) {
        result.subscribe((res: HttpResponse<XaMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: XaMySuffix) {
        this.eventManager.broadcast({ name: 'xaListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackHuyenById(index: number, item: HuyenMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-xa-my-suffix-popup',
    template: ''
})
export class XaMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private xaPopupService: XaMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.xaPopupService
                    .open(XaMySuffixDialogComponent as Component, params['id']);
            } else {
                this.xaPopupService
                    .open(XaMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
