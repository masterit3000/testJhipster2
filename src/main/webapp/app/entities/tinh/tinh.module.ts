import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    TinhService,
    TinhPopupService,
    TinhComponent,
    TinhDetailComponent,
    TinhDialogComponent,
    TinhPopupComponent,
    TinhDeletePopupComponent,
    TinhDeleteDialogComponent,
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
        TinhComponent,
        TinhDetailComponent,
        TinhDialogComponent,
        TinhDeleteDialogComponent,
        TinhPopupComponent,
        TinhDeletePopupComponent,
    ],
    entryComponents: [
        TinhComponent,
        TinhDialogComponent,
        TinhPopupComponent,
        TinhDeleteDialogComponent,
        TinhDeletePopupComponent,
    ],
    providers: [
        TinhService,
        TinhPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2TinhModule {}
