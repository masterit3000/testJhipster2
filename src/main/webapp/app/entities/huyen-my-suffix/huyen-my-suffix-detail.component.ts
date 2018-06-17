import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { HuyenMySuffix } from './huyen-my-suffix.model';
import { HuyenMySuffixService } from './huyen-my-suffix.service';

@Component({
    selector: 'jhi-huyen-my-suffix-detail',
    templateUrl: './huyen-my-suffix-detail.component.html'
})
export class HuyenMySuffixDetailComponent implements OnInit, OnDestroy {

    huyen: HuyenMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private huyenService: HuyenMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInHuyens();
    }

    load(id) {
        this.huyenService.find(id)
            .subscribe((huyenResponse: HttpResponse<HuyenMySuffix>) => {
                this.huyen = huyenResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInHuyens() {
        this.eventSubscriber = this.eventManager.subscribe(
            'huyenListModification',
            (response) => this.load(this.huyen.id)
        );
    }
}
