import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    HuyenMySuffixService,
    HuyenMySuffixPopupService,
    HuyenMySuffixComponent,
    HuyenMySuffixDetailComponent,
    HuyenMySuffixDialogComponent,
    HuyenMySuffixPopupComponent,
    HuyenMySuffixDeletePopupComponent,
    HuyenMySuffixDeleteDialogComponent,
    huyenRoute,
    huyenPopupRoute,
} from './';

const ENTITY_STATES = [
    ...huyenRoute,
    ...huyenPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        HuyenMySuffixComponent,
        HuyenMySuffixDetailComponent,
        HuyenMySuffixDialogComponent,
        HuyenMySuffixDeleteDialogComponent,
        HuyenMySuffixPopupComponent,
        HuyenMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        HuyenMySuffixComponent,
        HuyenMySuffixDialogComponent,
        HuyenMySuffixPopupComponent,
        HuyenMySuffixDeleteDialogComponent,
        HuyenMySuffixDeletePopupComponent,
    ],
    providers: [
        HuyenMySuffixService,
        HuyenMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2HuyenMySuffixModule {}
