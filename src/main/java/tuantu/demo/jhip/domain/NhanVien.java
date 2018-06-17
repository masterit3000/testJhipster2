package tuantu.demo.jhip.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import tuantu.demo.jhip.domain.enumeration.TrangThaiNhanVien;

/**
 * A NhanVien.
 */
@Entity
@Table(name = "nhan_vien")
public class NhanVien implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "tendangnhap", nullable = false)
    private String tendangnhap;

    @NotNull
    @Column(name = "matkhau", nullable = false)
    private String matkhau;

    @NotNull
    @Column(name = "ten", nullable = false)
    private String ten;

    @Size(max = 200)
    @Column(name = "diachi", length = 200)
    private String diachi;

    @Column(name = "dienthoai")
    private String dienthoai;

    @Size(max = 11)
    @Column(name = "cmnd", length = 11)
    private String cmnd;

    @Enumerated(EnumType.STRING)
    @Column(name = "trangthai")
    private TrangThaiNhanVien trangthai;

    @Column(name = "ngay_tao")
    private ZonedDateTime ngayTao;

    @ManyToOne
    private Xa xa;

    @ManyToOne
    private CuaHang cuaHang;

    @OneToMany(mappedBy = "nhanVien")
    @JsonIgnore
    private Set<ThuChi> thuchis = new HashSet<>();

    @OneToMany(mappedBy = "nhanVien")
    @JsonIgnore
    private Set<HopDong> hopdongs = new HashSet<>();

    @OneToMany(mappedBy = "nhanVien")
    @JsonIgnore
    private Set<LichSuThaoTacHopDong> lichsuthaotacnvs = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTendangnhap() {
        return tendangnhap;
    }

    public NhanVien tendangnhap(String tendangnhap) {
        this.tendangnhap = tendangnhap;
        return this;
    }

    public void setTendangnhap(String tendangnhap) {
        this.tendangnhap = tendangnhap;
    }

    public String getMatkhau() {
        return matkhau;
    }

    public NhanVien matkhau(String matkhau) {
        this.matkhau = matkhau;
        return this;
    }

    public void setMatkhau(String matkhau) {
        this.matkhau = matkhau;
    }

    public String getTen() {
        return ten;
    }

    public NhanVien ten(String ten) {
        this.ten = ten;
        return this;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getDiachi() {
        return diachi;
    }

    public NhanVien diachi(String diachi) {
        this.diachi = diachi;
        return this;
    }

    public void setDiachi(String diachi) {
        this.diachi = diachi;
    }

    public String getDienthoai() {
        return dienthoai;
    }

    public NhanVien dienthoai(String dienthoai) {
        this.dienthoai = dienthoai;
        return this;
    }

    public void setDienthoai(String dienthoai) {
        this.dienthoai = dienthoai;
    }

    public String getCmnd() {
        return cmnd;
    }

    public NhanVien cmnd(String cmnd) {
        this.cmnd = cmnd;
        return this;
    }

    public void setCmnd(String cmnd) {
        this.cmnd = cmnd;
    }

    public TrangThaiNhanVien getTrangthai() {
        return trangthai;
    }

    public NhanVien trangthai(TrangThaiNhanVien trangthai) {
        this.trangthai = trangthai;
        return this;
    }

    public void setTrangthai(TrangThaiNhanVien trangthai) {
        this.trangthai = trangthai;
    }

    public ZonedDateTime getNgayTao() {
        return ngayTao;
    }

    public NhanVien ngayTao(ZonedDateTime ngayTao) {
        this.ngayTao = ngayTao;
        return this;
    }

    public void setNgayTao(ZonedDateTime ngayTao) {
        this.ngayTao = ngayTao;
    }

    public Xa getXa() {
        return xa;
    }

    public NhanVien xa(Xa xa) {
        this.xa = xa;
        return this;
    }

    public void setXa(Xa xa) {
        this.xa = xa;
    }

    public CuaHang getCuaHang() {
        return cuaHang;
    }

    public NhanVien cuaHang(CuaHang cuaHang) {
        this.cuaHang = cuaHang;
        return this;
    }

    public void setCuaHang(CuaHang cuaHang) {
        this.cuaHang = cuaHang;
    }

    public Set<ThuChi> getThuchis() {
        return thuchis;
    }

    public NhanVien thuchis(Set<ThuChi> thuChis) {
        this.thuchis = thuChis;
        return this;
    }

    public NhanVien addThuchi(ThuChi thuChi) {
        this.thuchis.add(thuChi);
        thuChi.setNhanVien(this);
        return this;
    }

    public NhanVien removeThuchi(ThuChi thuChi) {
        this.thuchis.remove(thuChi);
        thuChi.setNhanVien(null);
        return this;
    }

    public void setThuchis(Set<ThuChi> thuChis) {
        this.thuchis = thuChis;
    }

    public Set<HopDong> getHopdongs() {
        return hopdongs;
    }

    public NhanVien hopdongs(Set<HopDong> hopDongs) {
        this.hopdongs = hopDongs;
        return this;
    }

    public NhanVien addHopdong(HopDong hopDong) {
        this.hopdongs.add(hopDong);
        hopDong.setNhanVien(this);
        return this;
    }

    public NhanVien removeHopdong(HopDong hopDong) {
        this.hopdongs.remove(hopDong);
        hopDong.setNhanVien(null);
        return this;
    }

    public void setHopdongs(Set<HopDong> hopDongs) {
        this.hopdongs = hopDongs;
    }

    public Set<LichSuThaoTacHopDong> getLichsuthaotacnvs() {
        return lichsuthaotacnvs;
    }

    public NhanVien lichsuthaotacnvs(Set<LichSuThaoTacHopDong> lichSuThaoTacHopDongs) {
        this.lichsuthaotacnvs = lichSuThaoTacHopDongs;
        return this;
    }

    public NhanVien addLichsuthaotacnv(LichSuThaoTacHopDong lichSuThaoTacHopDong) {
        this.lichsuthaotacnvs.add(lichSuThaoTacHopDong);
        lichSuThaoTacHopDong.setNhanVien(this);
        return this;
    }

    public NhanVien removeLichsuthaotacnv(LichSuThaoTacHopDong lichSuThaoTacHopDong) {
        this.lichsuthaotacnvs.remove(lichSuThaoTacHopDong);
        lichSuThaoTacHopDong.setNhanVien(null);
        return this;
    }

    public void setLichsuthaotacnvs(Set<LichSuThaoTacHopDong> lichSuThaoTacHopDongs) {
        this.lichsuthaotacnvs = lichSuThaoTacHopDongs;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        NhanVien nhanVien = (NhanVien) o;
        if (nhanVien.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), nhanVien.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "NhanVien{" +
            "id=" + getId() +
            ", tendangnhap='" + getTendangnhap() + "'" +
            ", matkhau='" + getMatkhau() + "'" +
            ", ten='" + getTen() + "'" +
            ", diachi='" + getDiachi() + "'" +
            ", dienthoai='" + getDienthoai() + "'" +
            ", cmnd='" + getCmnd() + "'" +
            ", trangthai='" + getTrangthai() + "'" +
            ", ngayTao='" + getNgayTao() + "'" +
            "}";
    }
}
