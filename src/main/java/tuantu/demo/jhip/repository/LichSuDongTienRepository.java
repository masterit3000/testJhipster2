package tuantu.demo.jhip.repository;

import tuantu.demo.jhip.domain.LichSuDongTien;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the LichSuDongTien entity.
 */
@SuppressWarnings("unused")
@Repository
public interface LichSuDongTienRepository extends JpaRepository<LichSuDongTien, Long> {

}
