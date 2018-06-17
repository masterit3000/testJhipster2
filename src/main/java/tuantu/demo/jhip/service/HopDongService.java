package tuantu.demo.jhip.service;

import tuantu.demo.jhip.service.dto.HopDongDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing HopDong.
 */
public interface HopDongService {

    /**
     * Save a hopDong.
     *
     * @param hopDongDTO the entity to save
     * @return the persisted entity
     */
    HopDongDTO save(HopDongDTO hopDongDTO);

    /**
     * Get all the hopDongs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<HopDongDTO> findAll(Pageable pageable);

    /**
     * Get the "id" hopDong.
     *
     * @param id the id of the entity
     * @return the entity
     */
    HopDongDTO findOne(Long id);

    /**
     * Delete the "id" hopDong.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
