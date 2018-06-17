import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { HuyenMySuffix } from './huyen-my-suffix.model';
import { HuyenMySuffixPopupService } from './huyen-my-suffix-popup.service';
import { HuyenMySuffixService } from './huyen-my-suffix.service';
import { TinhMySuffix, TinhMySuffixService } from '../tinh-my-suffix';

@Component({
    selector: 'jhi-huyen-my-suffix-dialog',
    templateUrl: './huyen-my-suffix-dialog.component.html'
})
export class HuyenMySuffixDialogComponent implements OnInit {

    huyen: HuyenMySuffix;
    isSaving: boolean;

    tinhs: TinhMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private huyenService: HuyenMySuffixService,
        private tinhService: TinhMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.tinhService.query()
            .subscribe((res: HttpResponse<TinhMySuffix[]>) => { this.tinhs = res.body; }, (res: HttpErrorResponse) => this.onError(res.message));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.huyen.id !== undefined) {
            this.subscribeToSaveResponse(
                this.huyenService.update(this.huyen));
        } else {
            this.subscribeToSaveResponse(
                this.huyenService.create(this.huyen));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<HuyenMySuffix>>) {
        result.subscribe((res: HttpResponse<HuyenMySuffix>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: HuyenMySuffix) {
        this.eventManager.broadcast({ name: 'huyenListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackTinhById(index: number, item: TinhMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-huyen-my-suffix-popup',
    template: ''
})
export class HuyenMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private huyenPopupService: HuyenMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.huyenPopupService
                    .open(HuyenMySuffixDialogComponent as Component, params['id']);
            } else {
                this.huyenPopupService
                    .open(HuyenMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
