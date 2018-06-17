package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.LichSuThaoTacHopDong;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the LichSuThaoTacHopDong entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LichSuThaoTacHopDongRepository extends JpaRepository<LichSuThaoTacHopDong, Long> {

}
