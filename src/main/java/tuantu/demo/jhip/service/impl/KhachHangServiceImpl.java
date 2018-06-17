package tuantu.demo.jhip.service.impl;

import tuantu.demo.jhip.service.KhachHangService;
import tuantu.demo.jhip.domain.KhachHang;
import tuantu.demo.jhip.repository.KhachHangRepository;
import tuantu.demo.jhip.service.dto.KhachHangDTO;
import tuantu.demo.jhip.service.mapper.KhachHangMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


/**
 * Service Implementation for managing KhachHang.
 */
@Service
@Transactional
public class KhachHangServiceImpl implements KhachHangService {

    private final Logger log = LoggerFactory.getLogger(KhachHangServiceImpl.class);

    private final KhachHangRepository khachHangRepository;

    private final KhachHangMapper khachHangMapper;

    public KhachHangServiceImpl(KhachHangRepository khachHangRepository, KhachHangMapper khachHangMapper) {
        this.khachHangRepository = khachHangRepository;
        this.khachHangMapper = khachHangMapper;
    }

    /**
     * Save a khachHang.
     *
     * @param khachHangDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public KhachHangDTO save(KhachHangDTO khachHangDTO) {
        log.debug("Request to save KhachHang : {}", khachHangDTO);
        KhachHang khachHang = khachHangMapper.toEntity(khachHangDTO);
        khachHang = khachHangRepository.save(khachHang);
        return khachHangMapper.toDto(khachHang);
    }

    /**
     * Get all the khachHangs.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<KhachHangDTO> findAll(Pageable pageable) {
        log.debug("Request to get all KhachHangs");
        return khachHangRepository.findAll(pageable)
            .map(khachHangMapper::toDto);
    }

    /**
     * Get one khachHang by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public KhachHangDTO findOne(Long id) {
        log.debug("Request to get KhachHang : {}", id);
        KhachHang khachHang = khachHangRepository.findOne(id);
        return khachHangMapper.toDto(khachHang);
    }

    /**
     * Delete the khachHang by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete KhachHang : {}", id);
        khachHangRepository.delete(id);
    }
}
