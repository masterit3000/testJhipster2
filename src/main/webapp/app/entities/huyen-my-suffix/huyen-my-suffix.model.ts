import { BaseEntity } from './../../shared';

export class HuyenMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public ten?: string,
        public tinhId?: number,
        public xas?: BaseEntity[],
    ) {
    }
}
