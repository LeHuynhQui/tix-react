import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList } from '../../homePage/actions/movie'
import { IS_HIDE_MODAL_MOVIE } from '../constants/admin'
import { deleteMovie } from '../actions/admin';
import ModalConfirmDelete from './ModalConfirmDelete';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalAddMovie from './ModalAddMovie';
import ModalUpdateMovie from './ModalUpdateMovie';

export default function QuanLyPhim() {
    const { movies } = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [modal, setModal] = useState(false);
    const [modalAddMovie, setModalAddMovie] = useState(false);
    const [modalUpdateMovie, setModalUpdateMovie] = useState(false);


    const [maPhimCanXoa, setMaPhimCanXoa] = useState(null);
    const [tenPhimCanXoa, setTenPhimCanXoa] = useState(null);

    const [phimCanSua, setPhimCanSua] = useState({});




    const toggle = () => setModal(!modal);
    const toggleModalAddMovie = () => setModalAddMovie(!modalAddMovie);
    const toggleModalUpdateMovie = () => setModalUpdateMovie(!modalUpdateMovie);
    
    const renderRating = (danhGia) => {
        // XỬ LÝ ICON RATING
        let numberRating = Number(danhGia) > 10 ? 10 : Number(danhGia)
        let rating = []

        for (let i = 1; i <= numberRating; ++i) {
            if (i % 2 === 0) {
                rating.push(<img src="https://tix.vn/app/assets/img/icons/star1.png" alt="star1" key={Math.random()} />)
            }
        }

        if (numberRating % 2 !== 0) {
            rating.push(<img src="https://tix.vn/app/assets/img/icons/star1.2.png" alt="star1/2" key={Math.random()} />)
        }

        return rating.map(item => { return item })

    }

    const handleSua = (movie) => {
        toggleModalUpdateMovie()
        setPhimCanSua(movie)
    }

    const renderTable = () => {
        return movies.map((movie, index) => {
            return (
                <tr className={(index + 1) % 2 === 0 ? "" : "le"} key={index}>
                    <td className="tb-stt">{index + 1}</td>
                    <td className="tb-maPhim">{movie.maPhim}</td>
                    <td className="tb-hinhAnh">
                        <img src={movie.hinhAnh} alt={movie.tenPhim} />
                    </td>
                    <td className="tb-tenPhim"><p className="m-0">{movie.tenPhim.toLowerCase()}</p></td>
                    <td className="tb-biDanh"><p className="m-0">{movie.biDanh}</p></td>
                    <td className="tb-moTa"><p className="m-0">{movie.moTa}</p></td>
                    <td className="tb-danhGia">
                        {renderRating(movie.danhGia)}
                    </td>
                    <td className="tb-dangChieu"><p className={movie.dangChieu ? "circle  mb-0  mt-2 circle-dangChieu" : "circle  mb-0  mt-2"}></p></td>
                    <td className="tb-sapChieu"><p className={movie.sapChieu ? "circle  mb-0  mt-2 circle-sapChieu" : "circle  mb-0  mt-2"} ></p></td>
                    <td className="tb-hot"><p className={movie.hot ? "circle  mb-0  mt-2 circle-hot" : "circle  mb-0  mt-2"}></p></td>
                    <td className="tb-setting">
                        <button className="mr-2 mt-2 xoa" onClick={() => handleClick(movie.maPhim, movie.tenPhim)}>Xoá</button>
                        <button className="sua mt-2" onClick={() => handleSua(movie)}>Sửa</button>
                    </td>
                </tr>
            )
        })
    }

    const handleClick = (maPhim, tenPhim) => {
        setMaPhimCanXoa(maPhim)
        setTenPhimCanXoa(tenPhim)
        toggle()
    }

    const themPhim = () => {
        toggleModalAddMovie()
    }





    const handleDelete = () => {
        if (maPhimCanXoa) {
            dispatch(deleteMovie(maPhimCanXoa))
        }
        toggle()
    }

   
    return (
        <div>
            <div className="mainContent">
                <div className="d-flex justify-content-between mb-3 align-items-center res">
                    <h2>Quản lý phim</h2>
                    <button className="addBTn" onClick={themPhim}><i class="fas fa-plus mr-2"></i>Thêm phim mới</button>
                </div>
                <div className="quanLyPhimContent">
                    <table>
                        <thead>
                            <tr>
                                <th className="tb-stt">#</th>
                                <th className="tb-maPhim">Mã phim</th>
                                <th className="tb-hinhAnh">Hình ảnh</th>
                                <th className="tb-tenPhim">Tên phim</th>
                                <th className="tb-biDanh">Bí danh</th>
                                <th className="tb-moTa">Mô tả</th>
                                <th className="tb-danhGia">Đánh giá</th>
                                <th className="tb-dangChieu">Đang chiếu</th>
                                <th className="tb-sapChieu">Sắp chiếu</th>
                                <th className="tb-hot">Hot</th>
                                <th className="tb-setting">Chức năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movies && renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>

            <ModalConfirmDelete modal={modal} toggle={toggle} handleDelete={handleDelete} tenPhimCanXoa={tenPhimCanXoa} />

            <ModalAddMovie modalAddMovie = {modalAddMovie} toggleModalAddMovie={toggleModalAddMovie}/>

            <ModalUpdateMovie modalUpdateMovie = {modalUpdateMovie} toggleModalUpdateMovie={toggleModalUpdateMovie} phimCanSua={phimCanSua}/>
            
        </div>
    )
}






