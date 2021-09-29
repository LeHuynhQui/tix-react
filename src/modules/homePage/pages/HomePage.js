import React from 'react'
import Trailer from '../../../components/Trailer'
import Banner from '../components/Banner'
import CumRap from '../components/CumRap'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import TinTuc from '../components/TinTuc'
import UngDung from '../components/UngDung'

export default function HomePage() {
   

    return (
        <div className="homePage">
            <Banner />
            <SearchBar />
            <MovieList />
            <CumRap />
            <TinTuc />
            <UngDung />
            <Trailer />
        </div>
    )
}
