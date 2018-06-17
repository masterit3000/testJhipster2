package tuantu.demo.jhip.service.mapper;

import tuantu.demo.jhip.domain.*;
import tuantu.demo.jhip.service.dto.TinhDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Tinh and its DTO TinhDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface TinhMapper extends EntityMapper<TinhDTO, Tinh> {


    @Mapping(target = "huyens", ignore = true)
    Tinh toEntity(TinhDTO tinhDTO);

    default Tinh fromId(Long id) {
        if (id == null) {
            return null;
        }
        Tinh tinh = new Tinh();
        tinh.setId(id);
        return tinh;
    }
}
