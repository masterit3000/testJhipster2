package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.GhiNo;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the GhiNo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GhiNoRepository extends JpaRepository<GhiNo, Long> {

}
