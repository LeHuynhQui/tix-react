import React, { Fragment, useEffect } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, Button } from 'reactstrap';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { postTaiKhoan } from '../actions/register';
import Loading from '../../../components/Loading';

const schema = yup.object().shape({
    taiKhoan: yup
        .string()
        .required("* Tài khoản không được để trống!"),
    matKhau: yup
        .string()
        .required("* Mật khẩu không được để trống!")
        .matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/, "* Mật khẩu phải có ít nhất 8 ký tự chứa 1 số, 1 chữ in hoa và một chữ thường!"),
    hoTen: yup
        .string()
        .required("* Họ Tên không được để trống!"),
    email: yup
        .string()
        .required("* Email không được để trống!")
        .email("* Email không đúng định dạng!"),
    soDt: yup
        .string()
        .required("* Số điện thoại không được để trống!")
        .matches(/[0-9]{10}/, "* Số điện thoại phải là số có 10 chữ số!")
        .max(15, "* Số điện thoại không được vượt 15 ký tự!"),
});


export default function Register() {
    const history = useHistory()

    const dispatch = useDispatch()

    const { isLoading, error, taiKhoan } = useSelector(state => state.registerReducer)

    const handleClick = () => {
        history.goBack()
    }

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        //    if (!error) {
        dispatch(postTaiKhoan(data))
        //    }

    }


    useEffect(() => {
        if (error) {
            console.log("reset")
            document.querySelector("form").reset()
        }
    }, [error])


    if (isLoading) {
        return <Loading />
    }

    if (taiKhoan) {
        history.replace("/login")
    }

    const renderErrorTaiKhoan = () => {
        if (error && error[0] === "T") {
            return <p className="text-danger text-left mb-3">{error}</p>
        }

        return <p className="text-danger text-left mb-3">{errors.taiKhoan?.message}</p>
    }

    const renderErrorEmail = () => {
        if (error && error[0] === "E") {
            return <p className="text-danger text-left mb-3">{error}</p>
        }

        return <p className="text-danger text-left mb-3">{errors.email?.message}</p>
    }


    return (
        <Fragment>
            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-user"></i></InputGroupText>
                    </InputGroupAddon> 
                    <Controller
                        name = "taiKhoan"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input placeholder="Tài khoản" {...field} />}
                    />
                </InputGroup>
                {renderErrorTaiKhoan()}

                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-lock"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="matKhau"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input type="password" placeholder="Mật khẩu" {...field} />}
                    /> 
                </InputGroup>
                <p className="text-danger text-left mb-3">{errors.matKhau?.message}</p>


                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-signature"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="hoTen"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input placeholder="Họ tên"  {...field} />}
                    /> 
                </InputGroup>
                <p className="text-danger text-left mb-3">{errors.hoTen?.message}</p>


                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-at"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input placeholder="Email" type="email" {...field} />}
                    /> 
                </InputGroup>
                {renderErrorEmail()}


                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-phone-alt"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="soDt"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input placeholder="Số điện thoại" type="tel"  {...field} />}
                    /> 
                </InputGroup>
                <p className="text-danger text-left mb-3">{errors.soDt?.message}</p>

                <Button className="mb-3">Đăng ký</Button>
            </Form>

            <div className="signin-close" ng-click="backToHomepage(0)" onClick={handleClick}></div>
        </Fragment>
    )
}

