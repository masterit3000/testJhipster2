import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { TinhMySuffix } from './tinh-my-suffix.model';
import { TinhMySuffixService } from './tinh-my-suffix.service';
import { Principal } from '../../shared';

@Component({
    selector: 'jhi-tinh-my-suffix',
    templateUrl: './tinh-my-suffix.component.html'
})
export class TinhMySuffixComponent implements OnInit, OnDestroy {
tinhs: TinhMySuffix[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private tinhService: TinhMySuffixService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.tinhService.query().subscribe(
            (res: HttpResponse<TinhMySuffix[]>) => {
                this.tinhs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTinhs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: TinhMySuffix) {
        return item.id;
    }
    registerChangeInTinhs() {
        this.eventSubscriber = this.eventManager.subscribe('tinhListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
