import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { TinhMySuffix } from './tinh-my-suffix.model';
import { TinhMySuffixService } from './tinh-my-suffix.service';

@Component({
    selector: 'jhi-tinh-my-suffix-detail',
    templateUrl: './tinh-my-suffix-detail.component.html'
})
export class TinhMySuffixDetailComponent implements OnInit, OnDestroy {

    tinh: TinhMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private tinhService: TinhMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInTinhs();
    }

    load(id) {
        this.tinhService.find(id)
            .subscribe((tinhResponse: HttpResponse<TinhMySuffix>) => {
                this.tinh = tinhResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInTinhs() {
        this.eventSubscriber = this.eventManager.subscribe(
            'tinhListModification',
            (response) => this.load(this.tinh.id)
        );
    }
}
