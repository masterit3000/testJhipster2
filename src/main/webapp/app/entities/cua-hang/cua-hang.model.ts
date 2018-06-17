import { BaseEntity } from './../../shared';

export const enum TrangThaiCuaHang {
    'DUNGHOATDONG',
    'HOATDONG'
}

export class CuaHang implements BaseEntity {
    constructor(
        public id?: number,
        public ten?: string,
        public diachi?: string,
        public dienthoai?: string,
        public cmnd?: string,
        public trangthai?: TrangThaiCuaHang,
        public ngayTao?: any,
        public xaId?: number,
        public thuchis?: BaseEntity[],
        public khachhangs?: BaseEntity[],
        public nhanviens?: BaseEntity[],
        public hopdongs?: BaseEntity[],
    ) {
    }
}
