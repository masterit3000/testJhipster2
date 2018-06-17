import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { HuyenMySuffix } from './huyen-my-suffix.model';
import { HuyenMySuffixPopupService } from './huyen-my-suffix-popup.service';
import { HuyenMySuffixService } from './huyen-my-suffix.service';

@Component({
    selector: 'jhi-huyen-my-suffix-delete-dialog',
    templateUrl: './huyen-my-suffix-delete-dialog.component.html'
})
export class HuyenMySuffixDeleteDialogComponent {

    huyen: HuyenMySuffix;

    constructor(
        private huyenService: HuyenMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.huyenService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'huyenListModification',
                content: 'Deleted an huyen'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-huyen-my-suffix-delete-popup',
    template: ''
})
export class HuyenMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private huyenPopupService: HuyenMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.huyenPopupService
                .open(HuyenMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
