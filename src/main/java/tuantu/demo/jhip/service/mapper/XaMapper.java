package tuantu.demo.jhip.service.mapper;

import tuantu.demo.jhip.domain.*;
import tuantu.demo.jhip.service.dto.XaDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Xa and its DTO XaDTO.
 */
@Mapper(componentModel = "spring", uses = {HuyenMapper.class})
public interface XaMapper extends EntityMapper<XaDTO, Xa> {

    @Mapping(source = "huyen.id", target = "huyenId")
    XaDTO toDto(Xa xa);

    @Mapping(source = "huyenId", target = "huyen")
    @Mapping(target = "khachangs", ignore = true)
    @Mapping(target = "nhanviens", ignore = true)
    @Mapping(target = "cuahangs", ignore = true)
    Xa toEntity(XaDTO xaDTO);

    default Xa fromId(Long id) {
        if (id == null) {
            return null;
        }
        Xa xa = new Xa();
        xa.setId(id);
        return xa;
    }
}
