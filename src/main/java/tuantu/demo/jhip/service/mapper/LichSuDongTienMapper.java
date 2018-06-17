package tuantu.demo.jhip.service.mapper;

import tuantu.demo.jhip.domain.*;
import tuantu.demo.jhip.service.dto.LichSuDongTienDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity LichSuDongTien and its DTO LichSuDongTienDTO.
 */
@Mapper(componentModel = "spring", uses = {HopDongMapper.class})
public interface LichSuDongTienMapper extends EntityMapper<LichSuDongTienDTO, LichSuDongTien> {

    @Mapping(source = "hopDong.id", target = "hopDongId")
    LichSuDongTienDTO toDto(LichSuDongTien lichSuDongTien);

    @Mapping(source = "hopDongId", target = "hopDong")
    LichSuDongTien toEntity(LichSuDongTienDTO lichSuDongTienDTO);

    default LichSuDongTien fromId(Long id) {
        if (id == null) {
            return null;
        }
        LichSuDongTien lichSuDongTien = new LichSuDongTien();
        lichSuDongTien.setId(id);
        return lichSuDongTien;
    }
}
