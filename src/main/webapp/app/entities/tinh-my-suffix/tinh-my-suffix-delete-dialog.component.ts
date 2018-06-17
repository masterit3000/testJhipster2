import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { TinhMySuffix } from './tinh-my-suffix.model';
import { TinhMySuffixPopupService } from './tinh-my-suffix-popup.service';
import { TinhMySuffixService } from './tinh-my-suffix.service';

@Component({
    selector: 'jhi-tinh-my-suffix-delete-dialog',
    templateUrl: './tinh-my-suffix-delete-dialog.component.html'
})
export class TinhMySuffixDeleteDialogComponent {

    tinh: TinhMySuffix;

    constructor(
        private tinhService: TinhMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.tinhService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'tinhListModification',
                content: 'Deleted an tinh'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-tinh-my-suffix-delete-popup',
    template: ''
})
export class TinhMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private tinhPopupService: TinhMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.tinhPopupService
                .open(TinhMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
