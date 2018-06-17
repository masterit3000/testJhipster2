import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    TinhMySuffixService,
    TinhMySuffixPopupService,
    TinhMySuffixComponent,
    TinhMySuffixDetailComponent,
    TinhMySuffixDialogComponent,
    TinhMySuffixPopupComponent,
    TinhMySuffixDeletePopupComponent,
    TinhMySuffixDeleteDialogComponent,
    tinhRoute,
    tinhPopupRoute,
} from './';

const ENTITY_STATES = [
    ...tinhRoute,
    ...tinhPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TinhMySuffixComponent,
        TinhMySuffixDetailComponent,
        TinhMySuffixDialogComponent,
        TinhMySuffixDeleteDialogComponent,
        TinhMySuffixPopupComponent,
        TinhMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        TinhMySuffixComponent,
        TinhMySuffixDialogComponent,
        TinhMySuffixPopupComponent,
        TinhMySuffixDeleteDialogComponent,
        TinhMySuffixDeletePopupComponent,
    ],
    providers: [
        TinhMySuffixService,
        TinhMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2TinhMySuffixModule {}
