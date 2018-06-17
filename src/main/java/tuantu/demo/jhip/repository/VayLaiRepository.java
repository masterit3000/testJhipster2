package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.VayLai;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the VayLai entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VayLaiRepository extends JpaRepository<VayLai, Long> {

}
