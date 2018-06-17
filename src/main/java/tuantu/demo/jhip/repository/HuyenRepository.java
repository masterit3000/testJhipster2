package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.Huyen;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Huyen entity.
 */
@SuppressWarnings("unused")
@Repository
public interface HuyenRepository extends JpaRepository<Huyen, Long> {

}
