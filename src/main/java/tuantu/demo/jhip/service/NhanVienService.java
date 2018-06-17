package tuantu.demo.jhip.service;

import tuantu.demo.jhip.service.dto.NhanVienDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing NhanVien.
 */
public interface NhanVienService {

    /**
     * Save a nhanVien.
     *
     * @param nhanVienDTO the entity to save
     * @return the persisted entity
     */
    NhanVienDTO save(NhanVienDTO nhanVienDTO);

    /**
     * Get all the nhanViens.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<NhanVienDTO> findAll(Pageable pageable);

    /**
     * Get the "id" nhanVien.
     *
     * @param id the id of the entity
     * @return the entity
     */
    NhanVienDTO findOne(Long id);

    /**
     * Delete the "id" nhanVien.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
