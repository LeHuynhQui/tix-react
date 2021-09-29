import React from 'react';
import { useSelector } from 'react-redux';


export default function ThongTin() {
    const { movie } = useSelector(state => state.movieDetailReducer)


    let ddMMyyyy = "";

    if (movie.ngayKhoiChieu) {
        let yyyyMMdd = movie.ngayKhoiChieu.slice(0, 10).replaceAll("-", ".");
        ddMMyyyy += yyyyMMdd.slice(-2)
        ddMMyyyy += `.${yyyyMMdd.slice(5, 7)}`
        ddMMyyyy += `.${yyyyMMdd.slice(0, 4)}`
    }

    return (
        <div className="row thongTin">
            <div className="col-6 thongTin-res">
                <div className="row">
                    <h6 className="col-5">Ngày công chiếu</h6>
                    <p className="col-6">{ddMMyyyy}</p>
                </div>
                <div className="row">
                    <h6 className="col-5">Đạo diễn</h6>
                    <p className="col-6">Unknow</p>
                </div>
                <div className="row">
                    <h6 className="col-5">Diễn viên</h6>
                    <p className="col-6">Unknow</p>
                </div>
                <div className="row">
                    <h6 className="col-5">Thể Loại</h6>
                    <p className="col-6">Unknow</p>
                </div>
                <div className="row">
                    <h6 className="col-5">Định dạng</h6>
                    <p className="col-6">2D/Digital</p>
                </div>
                <div className="row">
                    <h6 className="col-5">Quốc Gia</h6>
                    <p className="col-6">Unknow</p>
                </div>
            </div>

            <div className="col-6 pl-4">
                <h6 className="mb-3">Nội dung</h6>
                <p style={{lineHeight:"25px", fontWeight:"300"}}>{movie.moTa}</p>
            </div>
        </div>
    )
}
