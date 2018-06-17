package tuantu.demo.jhip.service.mapper;

import tuantu.demo.jhip.domain.*;
import tuantu.demo.jhip.service.dto.GhiNoDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity GhiNo and its DTO GhiNoDTO.
 */
@Mapper(componentModel = "spring", uses = {HopDongMapper.class})
public interface GhiNoMapper extends EntityMapper<GhiNoDTO, GhiNo> {

    @Mapping(source = "hopDong.id", target = "hopDongId")
    GhiNoDTO toDto(GhiNo ghiNo);

    @Mapping(source = "hopDongId", target = "hopDong")
    GhiNo toEntity(GhiNoDTO ghiNoDTO);

    default GhiNo fromId(Long id) {
        if (id == null) {
            return null;
        }
        GhiNo ghiNo = new GhiNo();
        ghiNo.setId(id);
        return ghiNo;
    }
}
