import React from 'react'
import PersonalLogo from './PersonalLogo'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="top row">
                    <div className="col-4 d-flex flex-column p-0">
                        <p>TIX</p>
                        <div className="row">
                            <div className="col-6 d-flex flex-column">
                                <a href="https://tix.vn/faq">FAQ</a>
                                <a href="https://tix.vn/brand-guideline/">Brand Guidepnes</a>
                            </div>
                            <div className="col-6 d-flex flex-column">
                                <a href="https://tix.vn/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>
                                <a href="https://tix.vn/chinh-sach-bao-mat">Chính sách bảo mật</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <p>ĐỐI TÁC</p>
                        <div className="partner">
                            <img src="https://tix.vn/app/assets/img/icons/cgv.png" alt="cgv" />
                            <img src="https://tix.vn/app/assets/img/icons/bhd.png" alt="bhd" />
                            <img src="https://tix.vn/app/assets/img/icons/galaxycine.png" alt="galaxy" />
                            <img src="https://tix.vn/app/assets/img/icons/cinestar.png" alt="cinestar" />
                            <img src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" alt="lotte" />
                            <img src="https://tix.vn/app/assets/img/icons/megags.png" alt="megas" />
                            <img src="https://tix.vn/app/assets/img/icons/bt.jpg" alt="bt" />
                            <img src="https://tix.vn/app/assets/img/icons/dongdacinema.png" alt="dongdacinema" />
                            <img src="https://tix.vn/app/assets/img/icons/TOUCH.png" alt="touch" />
                            <img src="https://tix.vn/app/assets/img/icons/cnx.jpg" alt="cnx" />
                            <img src="https://tix.vn/app/assets/img/icons/STARLIGHT.png" alt="STARLIGHT" />
                            <img src="https://tix.vn/app/assets/img/icons/dcine.png" alt="dcine" />
                            <img src="https://tix.vn/app/assets/img/icons/zalopay_icon.png" alt="zalopay_icon" />
                            <img src="https://tix.vn/app/assets/img/icons/payoo.jpg" alt="payoo" />
                            <img src="https://tix.vn/app/assets/img/icons/VCB.png" alt="VCB" />
                            <img src="https://tix.vn/app/assets/img/icons/AGRIBANK.png" alt="AGRIBANK" />
                            <img src="https://tix.vn/app/assets/img/icons/VIETTINBANK.png" alt="VIETTINBANK" />
                            <img src="https://tix.vn/app/assets/img/icons/IVB.png" alt="IVB" />
                            <img src="https://tix.vn/app/assets/img/icons/123go.png" alt="123go" />
                            <img src="https://tix.vn/app/assets/img/icons/laban.png" alt="laban" />
                        </div>

                    </div>
                    <div className="col-2">
                        <p className="text-center">MOBILE APP</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" target="_blank" rel="noreferrer">
                                <img className="logoApp mr-2" src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="apple" />
                            </a>

                            <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" target="_blank" rel="noreferrer">
                                <img className="logoApp ml-2" src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="android" />
                            </a>
                        </div>
                    </div>
                    <div className="col-2 p-0">
                        <p className="text-center">SOCIAL</p>
                        <div className="d-flex justify-content-center">
                            <a href="https://www.facebook.com/tix.vn/" target="_blank" rel="noreferrer">
                                <img className="logoApp mr-2" src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="facebook" />
                            </a>

                            <a href="https://zalo.me/tixdatve" target="_blank" rel="noreferrer">

                                <img className="logoApp ml-2" src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="zalo" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="responsive">
                    <div className="top-responsive d-flex justify-content-center">
                        <a className="mr-3 mb-2" href="https://tix.vn/faq">FAQ</a>
                        <a className="mr-3 mb-2" href="https://tix.vn/brand-guideline/">Brand Guidepnes</a>
                        <a className="mr-3 mb-2" href="https://tix.vn/thoa-thuan-su-dung">Thỏa thuận sử dụng</a>
                        <a className="" href="https://tix.vn/chinh-sach-bao-mat">Chính sách bảo mật</a>
                    </div>
                    <div className="d-flex justify-content-center mt-3 pb-3">
                        <a href="https://www.facebook.com/tix.vn/" target="_blank" rel="noreferrer">
                            <img style={{width: "30px"}} className="logoApp mr-2" src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="facebook" />
                        </a>

                        <a href="https://zalo.me/tixdatve" target="_blank" rel="noreferrer">

                            <img style={{width: "30px"}}  className="logoApp ml-2" src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="zalo" />
                        </a>
                    </div>
                </div>

                <div className="bottom row">
                    <div className="col-1 left">
                        <img src="https://tix.vn/app/assets/img/icons/zion-logo.jpg" alt="zion-logo" />
                    </div>
                    <div className="col-9">
                        <p className="text-white mb-1">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                        <p className="mb-0">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                        <p className="mb-0">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
                        <p className="mb-0">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                        <p className="mb-0">Số Điện Thoại (Hotline): 1900 545 436</p>
                        <p className="mb-0">Email: <a href="mailto:support@tix.vn">support@tix.vn</a></p>

                    </div>
                    <div className="col-2 right">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt="logo" />
                    </div>
                </div>

                <div className="text-center">
                    <a href="https://www.facebook.com/lehuynhqui99/" target="_blank" rel="noreferrer"><PersonalLogo /></a>
                </div>

            </div>
        </footer>
    )
}
