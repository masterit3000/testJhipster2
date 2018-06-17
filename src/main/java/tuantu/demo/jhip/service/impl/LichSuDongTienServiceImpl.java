package tuantu.demo.jhip.service.impl;

import tuantu.demo.jhip.service.LichSuDongTienService;
import tuantu.demo.jhip.domain.LichSuDongTien;
import tuantu.demo.jhip.repository.LichSuDongTienRepository;
import tuantu.demo.jhip.service.dto.LichSuDongTienDTO;
import tuantu.demo.jhip.service.mapper.LichSuDongTienMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing LichSuDongTien.
 */
@Service
@Transactional
public class LichSuDongTienServiceImpl implements LichSuDongTienService {

    private final Logger log = LoggerFactory.getLogger(LichSuDongTienServiceImpl.class);

    private final LichSuDongTienRepository lichSuDongTienRepository;

    private final LichSuDongTienMapper lichSuDongTienMapper;

    public LichSuDongTienServiceImpl(LichSuDongTienRepository lichSuDongTienRepository, LichSuDongTienMapper lichSuDongTienMapper) {
        this.lichSuDongTienRepository = lichSuDongTienRepository;
        this.lichSuDongTienMapper = lichSuDongTienMapper;
    }

    /**
     * Save a lichSuDongTien.
     *
     * @param lichSuDongTienDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public LichSuDongTienDTO save(LichSuDongTienDTO lichSuDongTienDTO) {
        log.debug("Request to save LichSuDongTien : {}", lichSuDongTienDTO);
        LichSuDongTien lichSuDongTien = lichSuDongTienMapper.toEntity(lichSuDongTienDTO);
        lichSuDongTien = lichSuDongTienRepository.save(lichSuDongTien);
        return lichSuDongTienMapper.toDto(lichSuDongTien);
    }

    /**
     * Get all the lichSuDongTiens.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<LichSuDongTienDTO> findAll(Pageable pageable) {
        log.debug("Request to get all LichSuDongTiens");
        return lichSuDongTienRepository.findAll(pageable)
            .map(lichSuDongTienMapper::toDto);
    }

    /**
     * Get one lichSuDongTien by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public LichSuDongTienDTO findOne(Long id) {
        log.debug("Request to get LichSuDongTien : {}", id);
        LichSuDongTien lichSuDongTien = lichSuDongTienRepository.findOne(id);
        return lichSuDongTienMapper.toDto(lichSuDongTien);
    }

    /**
     * Delete the lichSuDongTien by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete LichSuDongTien : {}", id);
        lichSuDongTienRepository.delete(id);
    }
}
