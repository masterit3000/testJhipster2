package tuantu.demo.jhip.service;

import tuantu.demo.jhip.service.dto.LichSuDongTienDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing LichSuDongTien.
 */
public interface LichSuDongTienService {

    /**
     * Save a lichSuDongTien.
     *
     * @param lichSuDongTienDTO the entity to save
     * @return the persisted entity
     */
    LichSuDongTienDTO save(LichSuDongTienDTO lichSuDongTienDTO);

    /**
     * Get all the lichSuDongTiens.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<LichSuDongTienDTO> findAll(Pageable pageable);

    /**
     * Get the "id" lichSuDongTien.
     *
     * @param id the id of the entity
     * @return the entity
     */
    LichSuDongTienDTO findOne(Long id);

    /**
     * Delete the "id" lichSuDongTien.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
