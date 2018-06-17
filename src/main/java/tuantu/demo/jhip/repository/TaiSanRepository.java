package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.TaiSan;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the TaiSan entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TaiSanRepository extends JpaRepository<TaiSan, Long> {

}
