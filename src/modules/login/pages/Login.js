import React, { Fragment } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, Button } from 'reactstrap';
import { useHistory, Redirect } from "react-router-dom"
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/login';
import Loading from '../../../components/Loading';

const schema = yup.object().shape({
    taiKhoan: yup.string().required("* Tài khoản không được để trống!"),
    matKhau: yup.string().required("* Mật khẩu không được để trống!"),
});


export default function Login() {
    // const {taiKhoan} = useSelector(state => state.registerReducer)

    const { user, isLoading, error } = useSelector(state => state.loginReducer)



    const history = useHistory()
    const dispatch = useDispatch()

    const handleClick = () => {
        history.goBack()
    }

    const dangKy = () => {
        history.replace("./register")
    }

    const { register, handleSubmit, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (values, e) => {
        // console.log(data)
        dispatch(login(values))

    }


    if (isLoading) {
        return < Loading />
    }

    if (user) {
        // history.goBack()
        if (sessionStorage.getItem("thongTinVe")) {
            const {maPhim} = JSON.parse(sessionStorage.getItem("thongTinVe"))
            const win = window.open(`/booking/${maPhim}`, "_blank");
            win.focus();
            return <Redirect to="/" />

        }
        return <Redirect to="/" />
    }

    // if(error) {
    //     history.go(0)
    // }


    return (
        <Fragment>
            <div className="signin--message">
                Đăng nhập để được nhiều ưu đãi, mua vé
                    <br />và bảo mật thông tin!
                </div>

            <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-user"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="taiKhoan"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input placeholder="Tài khoản" {...field} />}
                    />  
                </InputGroup>
                <p className="text-danger text-left pl-2">{errors.taiKhoan?.message}</p>

                <InputGroup className="mb-1">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fas fa-lock"></i></InputGroupText>
                    </InputGroupAddon>
                    <Controller
                        name="matKhau"
                        control={control}
                        defaultValue=""
                        render = {({field}) => <Input type="password"  placeholder="Mật khẩu" {...field}/>}
                    />  
                </InputGroup>
                <p className="text-danger text-left pl-2 mb-4">{errors.matKhau?.message}</p>

                <Button className="mb-3">Đăng nhập</Button>
                <p className="text-danger">{error && error}</p>
            </Form>
            <p className="text">Bạn chưa có tài khoản? <span onClick={dangKy}> Đăng ký</span></p>
            <div className="signin-close" ng-click="backToHomepage(0)" onClick={handleClick}></div>
        </Fragment>
    )
}

