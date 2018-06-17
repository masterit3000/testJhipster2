import { BaseEntity } from './../../shared';

export const enum HINHTHUCLAI {
    'NGAY',
    'THANG',
    'TUAN',
    'NAM',
    'THANGCODINH'
}

export const enum TINHLAI {
    'MOTRIEU',
    'CHUKY',
    'PHANTRAM'
}

export class VayLai implements BaseEntity {
    constructor(
        public id?: number,
        public tienvay?: number,
        public hinhthuclai?: HINHTHUCLAI,
        public thoigianvay?: number,
        public chukylai?: number,
        public lai?: number,
        public cachtinhlai?: TINHLAI,
        public hopdongvlId?: number,
    ) {
    }
}
