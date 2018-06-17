import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { XaMySuffix } from './xa-my-suffix.model';
import { XaMySuffixService } from './xa-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-xa-my-suffix',
    templateUrl: './xa-my-suffix.component.html'
})
export class XaMySuffixComponent implements OnInit, OnDestroy {
xas: XaMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private xaService: XaMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.xaService.query().subscribe(
            (res: HttpResponse<XaMySuffix[]>) => {
                this.xas = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInXas();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: XaMySuffix) {
        return item.id;
    }
    registerChangeInXas() {
        this.eventSubscriber = this.eventManager.subscribe('xaListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
