import axiosClient from "./axiosClient"

export const getUserAPI = () => {
    return axiosClient.get(
        "QuanLyNguoiDung/LayDanhSachNguoiDung", {
            params: {
                MaNhom: "GP15"
            }
        }
    )
}