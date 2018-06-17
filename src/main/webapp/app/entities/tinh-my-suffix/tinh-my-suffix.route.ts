import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { TinhMySuffixComponent } from './tinh-my-suffix.component';
import { TinhMySuffixDetailComponent } from './tinh-my-suffix-detail.component';
import { TinhMySuffixPopupComponent } from './tinh-my-suffix-dialog.component';
import { TinhMySuffixDeletePopupComponent } from './tinh-my-suffix-delete-dialog.component';

export const tinhRoute: Routes = [
    {
        path: 'tinh-my-suffix',
        component: TinhMySuffixComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tinhs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'tinh-my-suffix/:id',
        component: TinhMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tinhs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const tinhPopupRoute: Routes = [
    {
        path: 'tinh-my-suffix-new',
        component: TinhMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tinhs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tinh-my-suffix/:id/edit',
        component: TinhMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tinhs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'tinh-my-suffix/:id/delete',
        component: TinhMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Tinhs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
