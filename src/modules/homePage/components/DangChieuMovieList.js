import React from 'react'
import Movie from './Movie'
import MovieResponsive from './MovieResponsive'


export default function DangChieuMovieList() {
    


    return (
        <div>
            <div className="mt-5 list-dang-Chieu">
                <Movie />
            </div>
            <div className="mt-5 list-dang-Chieu-responsive">
                <MovieResponsive />
            </div>
        </div>
    )
}
