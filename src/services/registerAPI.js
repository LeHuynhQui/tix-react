import axiosClient from "./axiosClient";

export const postTaiKhoanAPI = (taiKhoan) => {
    return axiosClient.post(
        'QuanLyNguoiDung/DangKy',
        {...taiKhoan, maNhom: "GP15"}
    )
}