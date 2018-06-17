package tuantu.demo.jhip.service.impl;

import tuantu.demo.jhip.service.CuaHangService;
import tuantu.demo.jhip.domain.CuaHang;
import tuantu.demo.jhip.repository.CuaHangRepository;
import tuantu.demo.jhip.service.dto.CuaHangDTO;
import tuantu.demo.jhip.service.mapper.CuaHangMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing CuaHang.
 */
@Service
@Transactional
public class CuaHangServiceImpl implements CuaHangService {

    private final Logger log = LoggerFactory.getLogger(CuaHangServiceImpl.class);

    private final CuaHangRepository cuaHangRepository;

    private final CuaHangMapper cuaHangMapper;

    public CuaHangServiceImpl(CuaHangRepository cuaHangRepository, CuaHangMapper cuaHangMapper) {
        this.cuaHangRepository = cuaHangRepository;
        this.cuaHangMapper = cuaHangMapper;
    }

    /**
     * Save a cuaHang.
     *
     * @param cuaHangDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public CuaHangDTO save(CuaHangDTO cuaHangDTO) {
        log.debug("Request to save CuaHang : {}", cuaHangDTO);
        CuaHang cuaHang = cuaHangMapper.toEntity(cuaHangDTO);
        cuaHang = cuaHangRepository.save(cuaHang);
        return cuaHangMapper.toDto(cuaHang);
    }

    /**
     * Get all the cuaHangs.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<CuaHangDTO> findAll() {
        log.debug("Request to get all CuaHangs");
        return cuaHangRepository.findAll().stream()
            .map(cuaHangMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one cuaHang by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public CuaHangDTO findOne(Long id) {
        log.debug("Request to get CuaHang : {}", id);
        CuaHang cuaHang = cuaHangRepository.findOne(id);
        return cuaHangMapper.toDto(cuaHang);
    }

    /**
     * Delete the cuaHang by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete CuaHang : {}", id);
        cuaHangRepository.delete(id);
    }
}
