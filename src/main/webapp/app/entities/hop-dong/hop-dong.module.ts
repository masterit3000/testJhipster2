import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    HopDongService,
    HopDongPopupService,
    HopDongComponent,
    HopDongDetailComponent,
    HopDongDialogComponent,
    HopDongPopupComponent,
    HopDongDeletePopupComponent,
    HopDongDeleteDialogComponent,
    hopDongRoute,
    hopDongPopupRoute,
    HopDongResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...hopDongRoute,
    ...hopDongPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        HopDongComponent,
        HopDongDetailComponent,
        HopDongDialogComponent,
        HopDongDeleteDialogComponent,
        HopDongPopupComponent,
        HopDongDeletePopupComponent,
    ],
    entryComponents: [
        HopDongComponent,
        HopDongDialogComponent,
        HopDongPopupComponent,
        HopDongDeleteDialogComponent,
        HopDongDeletePopupComponent,
    ],
    providers: [
        HopDongService,
        HopDongPopupService,
        HopDongResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2HopDongModule {}
