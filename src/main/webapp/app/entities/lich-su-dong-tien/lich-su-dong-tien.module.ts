import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    LichSuDongTienService,
    LichSuDongTienPopupService,
    LichSuDongTienComponent,
    LichSuDongTienDetailComponent,
    LichSuDongTienDialogComponent,
    LichSuDongTienPopupComponent,
    LichSuDongTienDeletePopupComponent,
    LichSuDongTienDeleteDialogComponent,
    lichSuDongTienRoute,
    lichSuDongTienPopupRoute,
    LichSuDongTienResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...lichSuDongTienRoute,
    ...lichSuDongTienPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LichSuDongTienComponent,
        LichSuDongTienDetailComponent,
        LichSuDongTienDialogComponent,
        LichSuDongTienDeleteDialogComponent,
        LichSuDongTienPopupComponent,
        LichSuDongTienDeletePopupComponent,
    ],
    entryComponents: [
        LichSuDongTienComponent,
        LichSuDongTienDialogComponent,
        LichSuDongTienPopupComponent,
        LichSuDongTienDeleteDialogComponent,
        LichSuDongTienDeletePopupComponent,
    ],
    providers: [
        LichSuDongTienService,
        LichSuDongTienPopupService,
        LichSuDongTienResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2LichSuDongTienModule {}
