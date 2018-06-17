import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestJhipster2SharedModule } from '../../shared';
import {
    TaiSanService,
    TaiSanPopupService,
    TaiSanComponent,
    TaiSanDetailComponent,
    TaiSanDialogComponent,
    TaiSanPopupComponent,
    TaiSanDeletePopupComponent,
    TaiSanDeleteDialogComponent,
    taiSanRoute,
    taiSanPopupRoute,
} from './';

const ENTITY_STATES = [
    ...taiSanRoute,
    ...taiSanPopupRoute,
];

@NgModule({
    imports: [
        TestJhipster2SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TaiSanComponent,
        TaiSanDetailComponent,
        TaiSanDialogComponent,
        TaiSanDeleteDialogComponent,
        TaiSanPopupComponent,
        TaiSanDeletePopupComponent,
    ],
    entryComponents: [
        TaiSanComponent,
        TaiSanDialogComponent,
        TaiSanPopupComponent,
        TaiSanDeleteDialogComponent,
        TaiSanDeletePopupComponent,
    ],
    providers: [
        TaiSanService,
        TaiSanPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2TaiSanModule {}
