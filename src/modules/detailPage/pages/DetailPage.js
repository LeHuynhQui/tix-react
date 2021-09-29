import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Loading from '../../../components/Loading';
import Trailer from '../../../components/Trailer';
import HinhAnh from '../components/HinhAnh';
import Info from '../components/Info';
import { getMovieDetail } from "./../actions/movieDetail"


export default function DetailPage() {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { movie, isloading } = useSelector(state => state.movieDetailReducer)

    

    useEffect(() => {
        dispatch(getMovieDetail(id))

    }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

    if(isloading) {
        return <Loading />
    }

    const renderBg = () => {
        return <div className="blur" style={{ background: `url('${movie.hinhAnh}') center / cover no-repeat`, height: "800px" }}></div>
    }


    return (
        <div className="detail">
            <div className="bg">
                {movie && renderBg()}
            </div>
            <HinhAnh />
            <Info />
            <Trailer />
        </div>
    )
}
