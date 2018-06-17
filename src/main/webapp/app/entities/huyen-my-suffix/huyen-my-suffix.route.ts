import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { HuyenMySuffixComponent } from './huyen-my-suffix.component';
import { HuyenMySuffixDetailComponent } from './huyen-my-suffix-detail.component';
import { HuyenMySuffixPopupComponent } from './huyen-my-suffix-dialog.component';
import { HuyenMySuffixDeletePopupComponent } from './huyen-my-suffix-delete-dialog.component';

export const huyenRoute: Routes = [
    {
        path: 'huyen-my-suffix',
        component: HuyenMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Huyens'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'huyen-my-suffix/:id',
        component: HuyenMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Huyens'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const huyenPopupRoute: Routes = [
    {
        path: 'huyen-my-suffix-new',
        component: HuyenMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Huyens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'huyen-my-suffix/:id/edit',
        component: HuyenMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Huyens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'huyen-my-suffix/:id/delete',
        component: HuyenMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Huyens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
