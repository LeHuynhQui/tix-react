import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { XEM_THEM_DIEN_ANH } from '../constants/movie'

export default function DienAnh() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { dienAnh } = useSelector(state => state.xemThemReducer)

    const handleClick = () => {
        dispatch({ type: XEM_THEM_DIEN_ANH })
    }

    const handleClickDetail = () => {
        history.push("/coming-soon")
    }

    const renderDienAnh1 = () => {
        return (
            <Fragment>
                <div className="row top mb-3">
                    <div className="col-sm-6 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/d2e324cd5ff4a1d0fd8fad1380be30ae.jpg" onClick={handleClickDetail} alt="buff1"/>
                        <div>
                            <h6 onClick={handleClickDetail}>Tác phẩm kinh dị - giật gân mới của nhà Blumhouse thống trị phòng vé cả Bắc Mỹ lẫn Việt Nam</h6>
                            <p>Kịch bản hoàn hảo, diễn xuất tuyệt vời đã khiến bộ phim bội thu gấp 7 lần kinh phí sản xuất.</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/03/da83f40e5f570dfd07b4e88c67bbf021.jpg" onClick={handleClickDetail} alt="buff2" />
                        <div>
                            <h6 onClick={handleClickDetail}>Vũ trụ Điện ảnh Valiant được Sony đưa lên màn bạc như thế nào?</h6>
                            <p>Nước cờ đầu tiên mang tên Bloodshot có đủ sức để Sony và Valiant thu hút khán giả?</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row bottom mb-3">
                    <div className="col-sm-4 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/7b764fbc616b0910c9517c1360a5b46c.jpg"  onClick={handleClickDetail} alt="buff1" />
                        <div>
                            <h6 onClick={handleClickDetail}>Công thức nào đã giúp Pixar lấy được cả nụ cười lẫn nước mắt của khán giả?</h6>
                            <p>Onward sẽ thực sự tiếp nối thành công của những tác phẩm tiền nhiệm?</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/4168842fd3144bb7f965eeecb4d03bd3.jpg"  onClick={handleClickDetail} alt="buff1" />
                        <div>
                            <h6 onClick={handleClickDetail}>Trước khi 'nín thở' với Vùng Đất Câm Lặng II, bạn cần phải biết trước điều gì?</h6>
                            <p>Với nội dung mở rộng hơn, chắc hẳn phần II sẽ mang đến sự hồi hộp cũng như kinh hãi gấp bội so với phần phim năm 2018.</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bottom_right">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/a5e76d01bdabea4582a240e31f1bfaaf.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Khi đế chế 'số một' làng phim kinh dị Blumhouse bắt tay thiên tài tái sáng tạo Kẻ Vô Hình</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/1b21048df0b93b5be5aff82099b3c16e.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Đạo diễn siêu phẩm Searching tái xuất trong tác phẩm kinh dị - giật gân Run</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/83152aa23b1c680e3271a9b0b2179901.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>'Đế chế' mafia nào từng khuynh đảo màn ảnh bạc?</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/64a5c4dee966d34059ab4b95e75ea7ce.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Làm 'anh hùng' trong Vũ trụ Fast chưa đủ, Vin Diesel quyết hoá thân thành người hùng nano trong Bloodshot</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }



    const renderDienAnh2 = () => {
        return (
            <Fragment>
                <div className="row top mb-3">
                    <div className="col-sm-6 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/truoc-them-valentine-tiec-trang-mau-tung-trailer-cuc-hai-huoc-va-day-kich-thich-15814858687577.jpg" onClick={handleClickDetail} alt="buff1" />
                        <div>
                            <h6 onClick={handleClickDetail}>Trước thềm Valentine, Tiệc Trăng Máu tung trailer cực hài hước và đầy kích thích</h6>
                            <p>Sau khi xem trailer này, hội có gấu liệu có rùng mình?</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/can-phong-cam-do-su-that-ngu-tri-trong-con-nguoi-u-am-den-co-nao-15810652868586.jpg" onClick={handleClickDetail} alt="buff2" />
                        <div>
                            <h6 onClick={handleClickDetail}>Căn Phòng Cám Dỗ - Sự thật ngự trị trong con người u ám đến cỡ nào</h6>
                            <p>Một tác phẩm tâm lý, kinh dị nhưng lại rất đời thực bởi chúng ta sẽ thấy chính bản thân mình thông qua bộ phim.</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row bottom mb-3">
                    <div className="col-sm-4 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/lo-dien-trailer-minions-2-gi-dau-ai-cung-de-thuong-het-phan-thien-ha-15809739867053.jpg"  onClick={handleClickDetail} alt="buff1" />
                        <div>
                            <h6 onClick={handleClickDetail}>Lộ diện trailer Minions 2, gì đâu ai cũng dễ thương hết phần thiên hạ</h6>
                            <p>Cậu bạn Minion mới đã xuất hiện. Dễ thương hơn và cũng ngáo ngơ hơn.</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex flex-column">
                        <img src="https://s3img.vcdn.vn/123phim/2020/02/bfc92fda2a4f6a4babe22fed87ec7011.png"  onClick={handleClickDetail} alt="buff1" />
                        <div>
                            <h6 onClick={handleClickDetail}>Đâu là các nam thần Hollywood đã từng sánh đôi với nàng Harley Quinn xinh đẹp, điên loạn?</h6>
                            <p>Vừa Leonardo, vừa Jared, Margot Robbie số hưởng quá rồi còn gì.</p>
                            <div className="d-flex align-items-center icon">
                                <div className="d-flex like align-items-center mr-3">
                                    <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                    <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                                </div>
                                <div className="d-flex comment align-items-center ml-3">
                                    <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                    <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bottom_right">
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/3308cde8ece70efd3f69c2509d4acb94.png"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Năm 2020, khi các nữ nhân truyện tranh chiếm sóng màn bạc</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/02/12c842a001504ab1ef73c8097938e2ef.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Lộ diện phản diện mới của series Fast and Furious, 'người đặc biệt' đã trở lại!</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/01/lien-minh-thu-cung-lua-chon-hoan-hao-cho-gia-dinh-vao-dip-tet-15799779542583.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>Liên Minh Thú Cưng - Lựa chọn hoàn hảo cho gia đình vào dịp Tết</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src="https://s3img.vcdn.vn/123phim/2020/01/4d719df89d1f1b7745cb9071d58b8be4.jpg"  onClick={handleClickDetail} alt="right" />
                            </div>
                            <div className="col-sm-9">
                                <h6 onClick={handleClickDetail}>30 Chưa Phải Tết: 'Có nhiều nơi để đi, Tết chỉ có một nơi để về!'</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="mb-5 ">
            <div className="row top mb-3">
                <div className="col-sm-6 d-flex flex-column">
                    <img src="https://s3img.vcdn.vn/123phim/2020/11/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png" onClick={handleClickDetail} alt="buff1" />
                    <div>
                        <h6 onClick={handleClickDetail}>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng </h6>
                        <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ Ante</p>
                        <div className="d-flex align-items-center icon">
                            <div className="d-flex like align-items-center mr-3">
                                <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                            </div>
                            <div className="d-flex comment align-items-center ml-3">
                                <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 d-flex flex-column">
                    <img src="https://s3img.vcdn.vn/123phim/2020/06/toi-se-lam-tat-ca-ngo-ngang-boi-phien-ban-ta-ac-cua-minh-song-ji-hyo-15925373032288.png" onClick={handleClickDetail} alt="buff2" />
                    <div>
                        <h6 onClick={handleClickDetail}>‘Tôi sẽ làm tất cả ngỡ ngàng bởi phiên bản tà ác của mình’ - Song Ji Hyo</h6>
                        <p>Nhân dịp tác phẩm “Kẻ Xâm Nhập” giữ vững ngôi vương phòng vé suốt gần một tuần trình chiếu tại quê nhà, ekip sản xuất liền cho đăng tải poster cùng trailer đặc biệt, đồng thời chia sẻ không ít thông tin lý thú xoay quanh nội dung bộ phim.</p>
                        <div className="d-flex align-items-center icon">
                            <div className="d-flex like align-items-center mr-3">
                                <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                            </div>
                            <div className="d-flex comment align-items-center ml-3">
                                <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row bottom mb-3">
                <div className="col-sm-4 d-flex flex-column">
                    <img src="https://s3img.vcdn.vn/123phim/2020/05/phim-cho-ca-gia-dinh-vui-ve-nhan-dip-le-quoc-te-thieu-nhi-1-6-15905643444860.png"  onClick={handleClickDetail} alt="buff1" />
                    <div>
                        <h6 onClick={handleClickDetail}>Phim cho cả gia đình vui vẻ nhân dịp lễ Quốc Tế Thiếu Nhi 1/6</h6>
                        <p>Phim chiếu rạp dịp Quốc tế Thiếu nhi của năm 2020 có phần kém sôi động hơn những năm trước nhưng không vì vậy mà khán giả nhỏ tuổi bị “ngó lơ”. Cùng điểm qua hai tựa phim hoạt hình đầy màu sắc phiêu lưu, đáng yêu và cực kỳ ý nghĩa này nghĩa của mùa Tết thiếu nhi trong cuối tuần này nào!</p>
                        <div className="d-flex align-items-center icon">
                            <div className="d-flex like align-items-center mr-3">
                                <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                            </div>
                            <div className="d-flex comment align-items-center ml-3">
                                <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 d-flex flex-column">
                    <img src="https://s3img.vcdn.vn/123phim/2020/04/stormbreaker-va-mjolnir-loai-vu-khi-nao-cua-thor-manh-hon-15876330404511.png"  onClick={handleClickDetail} alt="buff1" />
                    <div>
                        <h6 onClick={handleClickDetail}>Stormbreaker và Mjolnir: Loại vũ khí nào của Thor mạnh hơn?</h6>
                        <p>Thor sử dụng cả búa Mjonlir và Stormbreaker trong vũ trụ điện ảnh Marvel - nhưng vũ khí nào mạnh hơn cả? Chúng ta cùng tìm hiểu chi tiết về hai cây búa này dựa vào những điều đã diễn ra trong tất cả các phần phim có Thor nhé!</p>
                        <div className="d-flex align-items-center icon">
                            <div className="d-flex like align-items-center mr-3">
                                <img src="https://tix.vn/app/assets/img/icons/like.png" alt="like" />
                                <p className="mb-2">{Math.floor(Math.random()*100)}</p>
                            </div>
                            <div className="d-flex comment align-items-center ml-3">
                                <img src="https://tix.vn/app/assets/img/icons/comment.png" alt="comment" />
                                <p className="mb-2">{Math.floor(Math.random()*20)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 bottom_right">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="https://s3img.vcdn.vn/123phim/2020/05/david-fincher-bac-thay-su-dung-visual-effects-15900518481959.png"  onClick={handleClickDetail} alt="right" />
                        </div>
                        <div className="col-sm-9">
                            <h6 onClick={handleClickDetail}>David Fincher bậc thầy sử dụng Visual Effects</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="https://s3img.vcdn.vn/123phim/2020/05/thien-linh-cai-chuyen-chua-ke-lam-tot-hon-phien-ban-chieu-rap-that-son-tam-linh-15898834629996.png"  onClick={handleClickDetail} alt="right" />
                        </div>
                        <div className="col-sm-9">
                            <h6 onClick={handleClickDetail}>Thiên Linh Cái: Chuyện Chưa Kể làm tốt hơn phiên bản chiếu rạp Thất Sơn Tâm Linh</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="https://s3img.vcdn.vn/123phim/2020/05/baba-yaga-va-nhung-man-cameo-lam-khan-gia-thot-tim-tren-man-anh-rong-15895151694055.png"  onClick={handleClickDetail} alt="right" />
                        </div>
                        <div className="col-sm-9">
                            <h6 onClick={handleClickDetail}>Baba Yaga và những màn cameo làm khán giả thót tim trên màn ảnh rộng!</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="https://s3img.vcdn.vn/123phim/2020/05/trailer-truyen-thuyet-ve-quan-tien-ngap-tran-bi-an-tu-cau-chuyen-khi-vuon-hiep-nguoi-den-can-benh-co-dan-ong-la-khoi-ngay-15891896054703.png"  onClick={handleClickDetail} alt="right" />
                        </div>
                        <div className="col-sm-9">
                            <h6 onClick={handleClickDetail}>Trailer “Truyền Thuyết Về Quán Tiên”: ngập tràn bí ẩn từ câu chuyện “khỉ vượn hiếp người” đến căn bệnh “có đàn ông là khỏi ngay”.</h6>
                        </div>
                    </div>
                </div>
            </div>

            {dienAnh >= 1 && renderDienAnh1()}
            {dienAnh === 2 && renderDienAnh2()}


            <div className={dienAnh === 2 ? "text-center d-none" : "text-center"}>
                <button onClick={handleClick}>XEM THÊM</button>
            </div>
        </div>
    )
}
