import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager } from 'ng-jhipster';

import { XaMySuffix } from './xa-my-suffix.model';
import { XaMySuffixService } from './xa-my-suffix.service';

@Component({
    selector: 'jhi-xa-my-suffix-detail',
    templateUrl: './xa-my-suffix-detail.component.html'
})
export class XaMySuffixDetailComponent implements OnInit, OnDestroy {

    xa: XaMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private xaService: XaMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInXas();
    }

    load(id) {
        this.xaService.find(id)
            .subscribe((xaResponse: HttpResponse<XaMySuffix>) => {
                this.xa = xaResponse.body;
            });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInXas() {
        this.eventSubscriber = this.eventManager.subscribe(
            'xaListModification',
            (response) => this.load(this.xa.id)
        );
    }
}
