import React, { useEffect, useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { addMovie } from '../actions/admin';
import { useDispatch, useSelector } from 'react-redux';


const schema = yup.object().shape({
    tenPhim: yup.string().required("* Tên phim không được để trống!").max(50, "* Tên phim không được vượt quá 50 ký tự!"),
    biDanh: yup.string().required("* Bí danh không được để trống!").max(50, "* Bí danh không được vượt quá 50 ký tự!"),
    trailer: yup.string().required("* Trailer không được để trống!").url("* Trailer phải có định dạng url!"),
    hinhAnh: yup.string().required("* Hình Ảnh không được để trống!"),
    moTa: yup.string().required("* Mô tả không được để trống!").max(150, "* Mô tả không được vượt quá 150 ký tự!"),
    ngayKhoiChieu: yup.string().required("* Ngày khởi chiếu không được để trống!"),
    danhGia: yup.number("* Đánh giá phải là số!").typeError('* Đánh giá phải là số và không được để trống!').required("* Đánh giá không được để trống!").positive("* Đánh giá phải là số dương!").max(10, "* Đánh giá không được vượt quá 10!"),
});



export default function ModalAddMovie({ modalAddMovie, toggleModalAddMovie }) {
    const dispatch = useDispatch()

    const { modalMovie } = useSelector(state => state.movieAdminReducer)

    const { handleSubmit, formState: { errors }, control, watch, register } = useForm({
        resolver: yupResolver(schema)
    });



    const [imgPrview, setImgPreview] = useState("")


    const watchImg = watch("hinhAnh", [])

    useEffect(() => {
        return () => {
            setImgPreview("")
        }
    }, [modalAddMovie])


    useEffect(() => {
        if (watchImg) {
            const file = watchImg[0]
            if (!file) return;

            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)

            fileReader.onload = (e) => {
                setImgPreview(e.target.result)
            }

        }


    }, [watchImg])


    const onSubmit = (values) => {
        if (watchImg.length) {
            const ngayChieu = values.ngayKhoiChieu
            const ngayChieuDungDinhDang = `${ngayChieu.slice(8, 10)}/${ngayChieu.slice(5, 7)}/${ngayChieu.slice(0, 4)}`

            values = { ...values, hinhAnh: watchImg, ngayKhoiChieu: ngayChieuDungDinhDang, biDanh: values.tenPhim.trim().replaceAll(" ", "-").toLowerCase()}

            // xu ly random true false
            const ranDom = Math.floor(Math.random()*20) % 2 === 0 ? true :false
            const ranDom2 = Math.floor(Math.random()*100) % 3 === 0 ? true :false



            console.log(values.hinhAnh)
            console.log(values)

            const formData = new FormData()
            formData.append("maPhim", 0)
            formData.append("tenPhim", values.tenPhim)
            formData.append("biDanh", values.biDanh)
            formData.append("trailer", values.trailer)
            formData.append("moTa", values.moTa)
            formData.append("ngayKhoiChieu", values.ngayKhoiChieu)
            formData.append("danhGia", values.danhGia)
            formData.append("hinhAnh", values.hinhAnh[0])
            formData.append("maNhom", "GP01")
            
            // formData.append("hot", ranDom2)
            // formData.append("dangChieu", ranDom)
            // formData.append("sapChieu", !ranDom)

            dispatch(addMovie(formData))
            toggleModalAddMovie()

        }
    }



    return (
        <Modal isOpen={modalAddMovie} toggle={toggleModalAddMovie}>
            <ModalHeader toggle={toggleModalAddMovie}>Thêm phim mới</ModalHeader>
            <ModalBody>
                <Form id="myForm" onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-file-signature"></i></InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="tenPhim"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Tên phim" {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.tenPhim?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="biDanh"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Bí danh" {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.biDanh?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-link"></i></InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="trailer"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Trailer" type="url" {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.trailer?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-signature"></i></InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="moTa"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Mô Tả" {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.moTa?.message}</p>

                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="fas fa-star"></i></InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="danhGia"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Đánh giá" {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.danhGia?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText><i className="far fa-calendar-alt"></i></InputGroupText>
                        </InputGroupAddon>
                        <Controller
                            name="ngayKhoiChieu"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <Input placeholder="Ngày Khởi Chiếu" onFocus={(event) => {
                                event.target.type = "date"
                            }} {...field} />}
                        />
                    </InputGroup>
                    <p className="text-danger text-left mt-1 mb-3">{errors.ngayKhoiChieu?.message}</p>


                    <InputGroup className="mt-3">
                        <InputGroupAddon addonType="prepend" className="hinh">
                            <p className="mr-5">Hình Ảnh <span className="text-danger"> *</span></p>
                            {imgPrview && <img src={imgPrview} alt="preview" />}
                            <label className="frame-hinhAnh" htmlFor="hinhAnh"></label>
                        </InputGroupAddon>
                        {/* <Controller 
                            name="hinhAnh"
                            control={control}
                            defaultValue=""
                            render = {({field}) => <input className="" id="hinhAnh" type="file" {...field}/>}
                        /> */}
                        <input className="d-none" id="hinhAnh" type="file"  {...register("hinhAnh")} />
                    </InputGroup>
                    {/* <p className="text-danger errorhinhAnh text-left mt-1 mb-3">{watchImg.length ? "" : "* Hình Ảnh không được để trống!"}</p> */}



                    <InputGroup className="mt-4">
                        <Button className="mb-3 w-100" color="success">Thêm</Button>
                    </InputGroup>
                </Form>
            </ModalBody>
            {/* <ModalFooter>
                <Button color="primary" onClick={toggleModalAddMovie}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggleModalAddMovie}>Cancel</Button>
            </ModalFooter> */}
        </Modal>
        // <div className={modalMovie ? "phimModal" : "phimModal d-none"}>
        //     <div className="modal-container">
        //         <h3 className="text-center mb-5">Thêm phim ảnh</h3>
        //         <Form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="tenPhim"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Tên phim" {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.tenPhim?.message}</p>

        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="biDanh"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Bí danh" {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.biDanh?.message}</p>

        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="trailer"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Trailer" type="url" {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.trailer?.message}</p>


        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="moTa"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Mô Tả" {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.moTa?.message}</p>

        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="danhGia"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Đánh giá" {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.danhGia?.message}</p>


        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend">
        //                     <InputGroupText>@</InputGroupText>
        //                 </InputGroupAddon>
        //                 <Controller 
        //                     name="ngayKhoiChieu"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <Input placeholder="Ngày Khởi Chiếu" onFocus={(event) => {
        //                         event.target.type = "date"
        //                     }} {...field}/>}
        //                 />
        //             </InputGroup>
        //             <p className="text-danger text-left mt-1 mb-3">{errors.ngayKhoiChieu?.message}</p>



        //             <InputGroup className="mt-3">
        //                 <InputGroupAddon addonType="prepend" className="hinh">
        //                     <p className="mr-5">Hình Ảnh <span className="text-danger"> *</span></p>
        //                     {imgPrview && <img src={imgPrview} alt="preview"/>}
        //                     <label htmlFor="hinhAnh"></label>
        //                 </InputGroupAddon>
        //                 {/* <Controller 
        //                     name="hinhAnh"
        //                     control={control}
        //                     defaultValue=""
        //                     render = {({field}) => <input className="" id="hinhAnh" type="file" {...field}/>}
        //                 /> */}
        //                 <input className="d-none" id="hinhAnh" type="file"  {...register("hinhAnh")}/>
        //             </InputGroup>
        //             {/* <p className="text-danger errorhinhAnh text-left mt-1 mb-3">{watchImg.length ? "" : "* Hình Ảnh không được để trống!"}</p> */}



        //             <InputGroup className="mt-4">
        //                 <Button className="mb-3 w-100" color="success">Thêm</Button>
        //             </InputGroup>
        //         </Form>

        //     </div>
        // </div>
    )
}
