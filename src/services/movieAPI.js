import axiosClient from "./axiosClient";



export const getBannerAPI = () => {
    return axiosClient.get(
        'QuanLyPhim/LayDanhSachBanner'
    )
}



export const getMoviesAPI = () => {
    return axiosClient.get(
        'QuanLyPhim/LayDanhSachPhim',{
            params: {
               maNhom : "GP01"
            }
        }
    )
}

export const getMovieDetailAPI = (id) => {
    return axiosClient.get(
        'QuanLyRap/LayThongTinLichChieuPhim', {
            params: {
                MaPhim: id
            }
        }
    )
}

export const getThongTinHeThongRapAPI = () => {
    return axiosClient.get(
        'QuanLyRap/LayThongTinHeThongRap'
    )
}

export const getThongTinCumRapAPI = (maHeThongRap) => {
    return axiosClient.get(
        'QuanLyRap/LayThongTinCumRapTheoHeThong',
        {
            params: {
                maHeThongRap
            }
        }
    )
}

export const getThongTinLichChieuHeThongRapAPI = (maHeThongRap) => {
    return axiosClient.get(
        'QuanLyRap/LayThongTinLichChieuHeThongRap',
        {
            params: {
                maHeThongRap,
                maNhom: "GP01"
            }
        }
    )
}


export const addMovieAPI = (movie) => {
    return axiosClient.post(
        'QuanLyPhim/ThemPhimUploadHinh',
        movie
    )
}


export const deleteMovieAPI = (MaPhim) => {
    return axiosClient.delete(
        'QuanLyPhim/XoaPhim', {
            params: {
                MaPhim
            }
        }
    )
}

export const updateMovieAPI = (movie) => {
    return axiosClient.post(
        'QuanLyPhim/CapNhatPhimUpload', 
        movie
    )
}

// USER

export const deleteUserAPI = (TaiKhoan) => {
    return axiosClient.delete(
        'QuanLyNguoiDung/XoaNguoiDung', {
            params: {
                TaiKhoan
            }
        }
    )
}


export const updateUserAPI = (user) => {
    return axiosClient.post(
        'QuanLyNguoiDung/CapNhatThongTinNguoiDung', 
        user
    )
}

export const addUserAPI = (user) => {
    return axiosClient.post(
        'QuanLyNguoiDung/ThemNguoiDung', 
        user
    )
}