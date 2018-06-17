package tuantu.demo.jhip.service.impl;

import tuantu.demo.jhip.service.HopDongService;
import tuantu.demo.jhip.domain.HopDong;
import tuantu.demo.jhip.repository.HopDongRepository;
import tuantu.demo.jhip.service.dto.HopDongDTO;
import tuantu.demo.jhip.service.mapper.HopDongMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing HopDong.
 */
@Service
@Transactional
public class HopDongServiceImpl implements HopDongService {

    private final Logger log = LoggerFactory.getLogger(HopDongServiceImpl.class);

    private final HopDongRepository hopDongRepository;

    private final HopDongMapper hopDongMapper;

    public HopDongServiceImpl(HopDongRepository hopDongRepository, HopDongMapper hopDongMapper) {
        this.hopDongRepository = hopDongRepository;
        this.hopDongMapper = hopDongMapper;
    }

    /**
     * Save a hopDong.
     *
     * @param hopDongDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public HopDongDTO save(HopDongDTO hopDongDTO) {
        log.debug("Request to save HopDong : {}", hopDongDTO);
        HopDong hopDong = hopDongMapper.toEntity(hopDongDTO);
        hopDong = hopDongRepository.save(hopDong);
        return hopDongMapper.toDto(hopDong);
    }

    /**
     * Get all the hopDongs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<HopDongDTO> findAll(Pageable pageable) {
        log.debug("Request to get all HopDongs");
        return hopDongRepository.findAll(pageable)
            .map(hopDongMapper::toDto);
    }

    /**
     * Get one hopDong by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public HopDongDTO findOne(Long id) {
        log.debug("Request to get HopDong : {}", id);
        HopDong hopDong = hopDongRepository.findOne(id);
        return hopDongMapper.toDto(hopDong);
    }

    /**
     * Delete the hopDong by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete HopDong : {}", id);
        hopDongRepository.delete(id);
    }
}
