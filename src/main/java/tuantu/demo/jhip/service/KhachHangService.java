package tuantu.demo.jhip.service;

import tuantu.demo.jhip.service.dto.KhachHangDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing KhachHang.
 */
public interface KhachHangService {

    /**
     * Save a khachHang.
     *
     * @param khachHangDTO the entity to save
     * @return the persisted entity
     */
    KhachHangDTO save(KhachHangDTO khachHangDTO);

    /**
     * Get all the khachHangs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<KhachHangDTO> findAll(Pageable pageable);

    /**
     * Get the "id" khachHang.
     *
     * @param id the id of the entity
     * @return the entity
     */
    KhachHangDTO findOne(Long id);

    /**
     * Delete the "id" khachHang.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
