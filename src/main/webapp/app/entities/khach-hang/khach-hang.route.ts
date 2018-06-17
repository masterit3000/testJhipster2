import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { KhachHangComponent } from './khach-hang.component';
import { KhachHangDetailComponent } from './khach-hang-detail.component';
import { KhachHangPopupComponent } from './khach-hang-dialog.component';
import { KhachHangDeletePopupComponent } from './khach-hang-delete-dialog.component';

@Injectable()
export class KhachHangResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const khachHangRoute: Routes = [
    {
        path: 'khach-hang',
        component: KhachHangComponent,
        resolve: {
            'pagingParams': KhachHangResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'KhachHangs'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'khach-hang/:id',
        component: KhachHangDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'KhachHangs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const khachHangPopupRoute: Routes = [
    {
        path: 'khach-hang-new',
        component: KhachHangPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'KhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'khach-hang/:id/edit',
        component: KhachHangPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'KhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'khach-hang/:id/delete',
        component: KhachHangDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'KhachHangs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
