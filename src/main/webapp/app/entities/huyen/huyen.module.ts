import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    HuyenService,
    HuyenPopupService,
    HuyenComponent,
    HuyenDetailComponent,
    HuyenDialogComponent,
    HuyenPopupComponent,
    HuyenDeletePopupComponent,
    HuyenDeleteDialogComponent,
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
        HuyenComponent,
        HuyenDetailComponent,
        HuyenDialogComponent,
        HuyenDeleteDialogComponent,
        HuyenPopupComponent,
        HuyenDeletePopupComponent,
    ],
    entryComponents: [
        HuyenComponent,
        HuyenDialogComponent,
        HuyenPopupComponent,
        HuyenDeleteDialogComponent,
        HuyenDeletePopupComponent,
    ],
    providers: [
        HuyenService,
        HuyenPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2HuyenModule {}
