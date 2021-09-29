import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, Button, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { updateMovie } from '../actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { IS_HIDE_MODAL_MOVIE } from '../constants/admin';


const schema = yup.object().shape({
    tenPhim: yup.string().required("* Tên phim không được để trống!").max(50, "* Tên phim không được vượt quá 50 ký tự!"),
    biDanh: yup.string().required("* Bí danh không được để trống!").max(50, "* Bí danh không được vượt quá 50 ký tự!"),
    trailer: yup.string().required("* Trailer không được để trống!").url("* Trailer phải có định dạng url!"),
    hinhAnh: yup.string().required("* Hình Ảnh không được để trống!"),
    moTa: yup.string().required("* Mô tả không được để trống!").max(150, "* Mô tả không được vượt quá 150 ký tự!"),
    ngayKhoiChieu: yup.string().required("* Ngày khởi chiếu không được để trống!"),
    danhGia: yup.number("* Đánh giá phải là số!").typeError('* Đánh giá phải là số và không được để trống!').required("* Đánh giá không được để trống!").positive("* Đánh giá phải là số dương!").max(10, "* Đánh giá không được vượt quá 10!"),
});



export default function ModalUpdateMovie({ modalUpdateMovie, toggleModalUpdateMovie, phimCanSua }) {
    const dispatch = useDispatch()

    const { modalMovie } = useSelector(state => state.movieAdminReducer)

    const { handleSubmit, formState: { errors }, control, watch, register } = useForm({
        resolver: yupResolver(schema)
    });

    const [imgPrview, setImgPreview] = useState("")



    useEffect(() => {
        return () => {
            setImgPreview("")
        }
    }, [toggleModalUpdateMovie])

    // const watchImg = watch("hinhAnh", [])

    const handleChange = (event) => {
        const file = event.target.files

        const fileReader = new FileReader()

        fileReader.readAsDataURL(file[0])

        fileReader.onload = (e) => {
            setImgPreview(e.target.result)
        }
    }


    const onSubmit = (event) => {
        let phimUpdate = {
            tenPhim: null,
            biDanh: null,
            trailer: null,
            hinhAnh: null,
            moTa: null,
            ngayKhoiChieu: null,
            danhGia: null
        }
        event.preventDefault()
        document.querySelectorAll("form input").forEach(input => {
            let value = input.value
            if (input.name === "hinhAnh") {
                value = input.files
            }
            phimUpdate = { ...phimUpdate, [input.name]: value }
        })

        const ngayChieu = phimUpdate.ngayKhoiChieu
        const ngayChieuDungDinhDang = `${ngayChieu.slice(8, 10)}/${ngayChieu.slice(5, 7)}/${ngayChieu.slice(0, 4)}`
        phimUpdate = { ...phimUpdate, ngayKhoiChieu: ngayChieuDungDinhDang }
        
        // console.log(phimUpdate)

        const ranDom = Math.floor(Math.random()*20) % 2 === 0 ? true :false
        const ranDom2 = Math.floor(Math.random()*100) % 3 === 0 ? true :false

        const formData = new FormData()
        formData.append("maPhim", phimCanSua.maPhim)
        formData.append("tenPhim", phimUpdate.tenPhim)
        formData.append("biDanh", phimUpdate.biDanh)
        formData.append("trailer", phimUpdate.trailer)
        formData.append("moTa", phimUpdate.moTa)
        formData.append("ngayKhoiChieu", phimUpdate.ngayKhoiChieu)
        formData.append("danhGia", phimUpdate.danhGia)
        formData.append("hinhAnh", phimUpdate.hinhAnh[0])
        // formData.append("hinhAnh", phimUpdate.hinhAnh)
        formData.append("maNhom", "GP01")
        formData.append("hot", ranDom2)
        formData.append("dangChieu", ranDom)
        formData.append("sapChieu", !ranDom)

        dispatch(updateMovie(formData))
        toggleModalUpdateMovie()
    }



    return (
        <Modal isOpen={modalUpdateMovie} toggle={toggleModalUpdateMovie}>
            <ModalHeader toggle={toggleModalUpdateMovie}>Cập nhật phim</ModalHeader>
            <ModalBody>
                <Form id="myForm" onSubmit={onSubmit}>
                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-file-signature"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="tenPhim"
                            control={control}
                            defaultValue={modalUpdateMovie ? phimCanSua.tenPhim : ""}
                            
                            render={({ field }) => <Input placeholder="Tên phim" {...field}/>}
                        /> */}

                        <Input type="text" name="tenPhim" placeholder="Tên phim" defaultValue={modalUpdateMovie ? phimCanSua.tenPhim : ""} />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.tenPhim?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="biDanh"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Bí danh" {...field} />}
                        /> */}
                        <Input type="text" placeholder="Bí danh" name="biDanh" defaultValue={modalUpdateMovie ? phimCanSua.biDanh : ""} />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.biDanh?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-link"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="trailer"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Trailer" type="url" {...field} />}
                        /> */}
                        <Input type="url" placeholder="Trailer" name="trailer" defaultValue={modalUpdateMovie ? phimCanSua.trailer : ""} />

                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.trailer?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-signature"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="moTa"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Mô Tả" {...field} />}
                        /> */}
                        <Input type="text" placeholder="Mô Tả" name="moTa" defaultValue={modalUpdateMovie ? phimCanSua.moTa : ""} />

                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.moTa?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-star"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="danhGia"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Đánh giá" {...field} />}
                        /> */}
                        <Input type="number" placeholder="Đánh giá" name="danhGia" defaultValue={modalUpdateMovie ? phimCanSua.danhGia : ""} />

                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.danhGia?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="far fa-calendar-alt"></i></InputGroupText>
                        </InputGroupAddon>
                        {/* <Controller
                            name="ngayKhoiChieu"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Ngày Khởi Chiếu" onFocus={(event) => {
                                event.target.type = "date"
                            }} {...field} />}
                        /> */}
                        <Input type="text" placeholder="Ngày Khởi Chiếu" name="ngayKhoiChieu" defaultValue={modalUpdateMovie ? `${phimCanSua.ngayKhoiChieu.slice(8, 10)}/${phimCanSua.ngayKhoiChieu.slice(5, 7)}/${phimCanSua.ngayKhoiChieu.slice(0, 4)}` : ""} onFocus={(e) => {
                            e.target.type = "date"
                        }} />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.ngayKhoiChieu?.message}</p>



                    {/* <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-link"></i></InputGroupText>
                        </InputGroupAddon>
                        <Input id="hinhAnh" type="url" name="hinhAnh" defaultValue={modalUpdateMovie ? phimCanSua.hinhAnh : ""} />

                    </InputGroup> */}



                    {/* <p className="text-danger errorhinhAnh text-left mt-1 mb-3">{watchImg.length ? "" : "* Hình Ảnh không được để trống!"}</p> */}


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend" className="hinh">
                            <p className="mr-5">Hình Ảnh <span className="text-danger"> *</span></p>
                            {imgPrview ? <img src={imgPrview} alt="preview" /> : <img src={phimCanSua.hinhAnh} alt="preview" />}
                            <label className="frame-hinhAnh" htmlFor="hinhAnh"></label>
                        </InputGroupAddon>
                        {/* <Controller 
                            name="hinhAnh"
                            control={control}
                            defaultValue=""
                            render = {({field}) => <input className="" id="hinhAnh" type="file" {...field}/>}
                        /> } */}
                        <input className="d-none" id="hinhAnh" type="file" name="hinhAnh" onChange={handleChange} />
                        {/* <input className="d-none" id="hinhAnh" type="text" name="hinhAnh" defaultValue={modalUpdateMovie ? phimCanSua.hinhAnh : ""} onChange={handleChange} /> */}
                    </InputGroup>
                    {/* <p className="text-danger errorhinhAnh text-left mt-1 mb-3">{watchImg.length ? "" : "* Hình Ảnh không được để trống!"}</p> */}



                    <InputGroup className="mt-4">
                        <Button className="mb-3 w-100" color="warning">Cập nhật</Button>
                    </InputGroup>
                </Form>
            </ModalBody>
        </Modal>
    )
}


