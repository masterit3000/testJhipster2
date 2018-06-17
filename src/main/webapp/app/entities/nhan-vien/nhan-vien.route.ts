import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil } from 'ng-jhipster';

import { UserRouteAccessService } from '../../shared';
import { NhanVienComponent } from './nhan-vien.component';
import { NhanVienDetailComponent } from './nhan-vien-detail.component';
import { NhanVienPopupComponent } from './nhan-vien-dialog.component';
import { NhanVienDeletePopupComponent } from './nhan-vien-delete-dialog.component';

@Injectable()
export class NhanVienResolvePagingParams implements Resolve<any> {

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

export const nhanVienRoute: Routes = [
    {
        path: 'nhan-vien',
        component: NhanVienComponent,
        resolve: {
            'pagingParams': NhanVienResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'NhanViens'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'nhan-vien/:id',
        component: NhanVienDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'NhanViens'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const nhanVienPopupRoute: Routes = [
    {
        path: 'nhan-vien-new',
        component: NhanVienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'NhanViens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'nhan-vien/:id/edit',
        component: NhanVienPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'NhanViens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'nhan-vien/:id/delete',
        component: NhanVienDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'NhanViens'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
