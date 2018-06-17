import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { HuyenMySuffix } from './huyen-my-suffix.model';
import { HuyenMySuffixService } from './huyen-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-huyen-my-suffix',
    templateUrl: './huyen-my-suffix.component.html'
})
export class HuyenMySuffixComponent implements OnInit, OnDestroy {
huyens: HuyenMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private huyenService: HuyenMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.huyenService.query().subscribe(
            (res: HttpResponse<HuyenMySuffix[]>) => {
                this.huyens = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInHuyens();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: HuyenMySuffix) {
        return item.id;
    }
    registerChangeInHuyens() {
        this.eventSubscriber = this.eventManager.subscribe('huyenListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
