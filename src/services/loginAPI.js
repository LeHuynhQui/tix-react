import axiosClient from "./axiosClient";

export const loginApi = (taiKhoan) => {
    return axiosClient.post(
        'QuanLyNguoiDung/DangNhap',
        taiKhoan
    )
}
