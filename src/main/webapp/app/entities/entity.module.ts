import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestJhipster2TinhMySuffixModule } from './tinh-my-suffix/tinh-my-suffix.module';
import { TestJhipster2XaMySuffixModule } from './xa-my-suffix/xa-my-suffix.module';
import { TestJhipster2HuyenMySuffixModule } from './huyen-my-suffix/huyen-my-suffix.module';
import { TestJhipster2TinhModule } from './tinh/tinh.module';
import { TestJhipster2XaModule } from './xa/xa.module';
import { TestJhipster2HuyenModule } from './huyen/huyen.module';
import { TestJhipster2KhachHangModule } from './khach-hang/khach-hang.module';
import { TestJhipster2CuaHangModule } from './cua-hang/cua-hang.module';
import { TestJhipster2NhanVienModule } from './nhan-vien/nhan-vien.module';
import { TestJhipster2AnhKhachHangModule } from './anh-khach-hang/anh-khach-hang.module';
import { TestJhipster2HopDongModule } from './hop-dong/hop-dong.module';
import { TestJhipster2LichSuDongTienModule } from './lich-su-dong-tien/lich-su-dong-tien.module';
import { TestJhipster2BatHoModule } from './bat-ho/bat-ho.module';
import { TestJhipster2VayLaiModule } from './vay-lai/vay-lai.module';
import { TestJhipster2GhiNoModule } from './ghi-no/ghi-no.module';
import { TestJhipster2LichSuThaoTacHopDongModule } from './lich-su-thao-tac-hop-dong/lich-su-thao-tac-hop-dong.module';
import { TestJhipster2ThuChiModule } from './thu-chi/thu-chi.module';
import { TestJhipster2TaiSanModule } from './tai-san/tai-san.module';
import { TestJhipster2AnhTaiSanModule } from './anh-tai-san/anh-tai-san.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        TestJhipster2TinhMySuffixModule,
        TestJhipster2XaMySuffixModule,
        TestJhipster2HuyenMySuffixModule,
        TestJhipster2TinhModule,
        TestJhipster2XaModule,
        TestJhipster2HuyenModule,
        TestJhipster2KhachHangModule,
        TestJhipster2CuaHangModule,
        TestJhipster2NhanVienModule,
        TestJhipster2AnhKhachHangModule,
        TestJhipster2HopDongModule,
        TestJhipster2LichSuDongTienModule,
        TestJhipster2BatHoModule,
        TestJhipster2VayLaiModule,
        TestJhipster2GhiNoModule,
        TestJhipster2LichSuThaoTacHopDongModule,
        TestJhipster2ThuChiModule,
        TestJhipster2TaiSanModule,
        TestJhipster2AnhTaiSanModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestJhipster2EntityModule {}
