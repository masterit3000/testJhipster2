package tuantu.demo.jhip.service.mapper;

import tuantu.demo.jhip.domain.*;
import tuantu.demo.jhip.service.dto.NhanVienDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity NhanVien and its DTO NhanVienDTO.
 */
@Mapper(componentModel = "spring", uses = {XaMapper.class, CuaHangMapper.class})
public interface NhanVienMapper extends EntityMapper<NhanVienDTO, NhanVien> {

    @Mapping(source = "xa.id", target = "xaId")
    @Mapping(source = "cuaHang.id", target = "cuaHangId")
    NhanVienDTO toDto(NhanVien nhanVien);

    @Mapping(source = "xaId", target = "xa")
    @Mapping(source = "cuaHangId", target = "cuaHang")
    @Mapping(target = "thuchis", ignore = true)
    @Mapping(target = "hopdongs", ignore = true)
    @Mapping(target = "lichsuthaotacnvs", ignore = true)
    NhanVien toEntity(NhanVienDTO nhanVienDTO);

    default NhanVien fromId(Long id) {
        if (id == null) {
            return null;
        }
        NhanVien nhanVien = new NhanVien();
        nhanVien.setId(id);
        return nhanVien;
    }
}
