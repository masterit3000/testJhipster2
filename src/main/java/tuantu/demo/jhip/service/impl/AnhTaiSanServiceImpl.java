package tuantu.demo.jhip.service.impl;

import tuantu.demo.jhip.service.AnhTaiSanService;
import tuantu.demo.jhip.domain.AnhTaiSan;
import tuantu.demo.jhip.repository.AnhTaiSanRepository;
import tuantu.demo.jhip.service.dto.AnhTaiSanDTO;
import tuantu.demo.jhip.service.mapper.AnhTaiSanMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing AnhTaiSan.
 */
@Service
@Transactional
public class AnhTaiSanServiceImpl implements AnhTaiSanService {

    private final Logger log = LoggerFactory.getLogger(AnhTaiSanServiceImpl.class);

    private final AnhTaiSanRepository anhTaiSanRepository;

    private final AnhTaiSanMapper anhTaiSanMapper;

    public AnhTaiSanServiceImpl(AnhTaiSanRepository anhTaiSanRepository, AnhTaiSanMapper anhTaiSanMapper) {
        this.anhTaiSanRepository = anhTaiSanRepository;
        this.anhTaiSanMapper = anhTaiSanMapper;
    }

    /**
     * Save a anhTaiSan.
     *
     * @param anhTaiSanDTO the entity to save
     * @return the persisted entity
     */
    @Override
    public AnhTaiSanDTO save(AnhTaiSanDTO anhTaiSanDTO) {
        log.debug("Request to save AnhTaiSan : {}", anhTaiSanDTO);
        AnhTaiSan anhTaiSan = anhTaiSanMapper.toEntity(anhTaiSanDTO);
        anhTaiSan = anhTaiSanRepository.save(anhTaiSan);
        return anhTaiSanMapper.toDto(anhTaiSan);
    }

    /**
     * Get all the anhTaiSans.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<AnhTaiSanDTO> findAll() {
        log.debug("Request to get all AnhTaiSans");
        return anhTaiSanRepository.findAll().stream()
            .map(anhTaiSanMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one anhTaiSan by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public AnhTaiSanDTO findOne(Long id) {
        log.debug("Request to get AnhTaiSan : {}", id);
        AnhTaiSan anhTaiSan = anhTaiSanRepository.findOne(id);
        return anhTaiSanMapper.toDto(anhTaiSan);
    }

    /**
     * Delete the anhTaiSan by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete AnhTaiSan : {}", id);
        anhTaiSanRepository.delete(id);
    }
}
