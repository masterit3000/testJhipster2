import { BaseEntity } from './../../shared';

export class XaMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public ten?: string,
        public huyenId?: number,
    ) {
    }
}
