import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    NhanVienService,
    NhanVienPopupService,
    NhanVienComponent,
    NhanVienDetailComponent,
    NhanVienDialogComponent,
    NhanVienPopupComponent,
    NhanVienDeletePopupComponent,
    NhanVienDeleteDialogComponent,
    nhanVienRoute,
    nhanVienPopupRoute,
    NhanVienResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...nhanVienRoute,
    ...nhanVienPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        NhanVienComponent,
        NhanVienDetailComponent,
        NhanVienDialogComponent,
        NhanVienDeleteDialogComponent,
        NhanVienPopupComponent,
        NhanVienDeletePopupComponent,
    ],
    entryComponents: [
        NhanVienComponent,
        NhanVienDialogComponent,
        NhanVienPopupComponent,
        NhanVienDeleteDialogComponent,
        NhanVienDeletePopupComponent,
    ],
    providers: [
        NhanVienService,
        NhanVienPopupService,
        NhanVienResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2NhanVienModule {}
