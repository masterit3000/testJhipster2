package tuantu.demo.jhip.service;

import tuantu.demo.jhip.service.dto.TinhDTO;
import java.util.List;

/**
 * Service Interface for managing Tinh.
 */
public interface TinhService {

    /**
     * Save a tinh.
     *
     * @param tinhDTO the entity to save
     * @return the persisted entity
     */
    TinhDTO save(TinhDTO tinhDTO);

    /**
     * Get all the tinhs.
     *
     * @return the list of entities
     */
    List<TinhDTO> findAll();

    /**
     * Get the "id" tinh.
     *
     * @param id the id of the entity
     * @return the entity
     */
    TinhDTO findOne(Long id);

    /**
     * Delete the "id" tinh.
     *
     * @param id the id of the entity
     */
    void delete(Long id);
}
