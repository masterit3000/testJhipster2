package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.Xa;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Xa entity.
 */
@SuppressWarnings("unused")
@Repository
public interface XaRepository extends JpaRepository<Xa, Long> {

}
