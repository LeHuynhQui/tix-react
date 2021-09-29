import React from 'react'
import { useHistory } from 'react-router-dom'

export default function PersonalLogo() {
    const history = useHistory()

    const handleClick = () => {
        history.push("/admin")

    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="190" height="50" viewBox="0 0 190 50" onClick={handleClick}>
            <defs>
                <clipPath id="clip-Web_1920_1">
                    <rect width="190" height="50" />
                </clipPath>
            </defs>
            <g id="Web_1920_1" dataname="Web 1920 – 1" clipPath="url(#clip-Web_1920_1)">
                <g id="Ellipse_2" dataname="Ellipse 2" transform="translate(5 2)" fill="rgba(255,255,255,0)" stroke="#0f141e" strokeWidth="2">
                    <circle cx="23" cy="23" r="23" stroke="none" />
                    <circle cx="23" cy="23" r="22" fill="none" />
                </g>
                <text id="hq" transform="translate(16 16)" fill="#0f141e" fontSize="19" fontFamily="Helvetica-Bold, Helvetica" fontWeight="700"><tspan x="0" y="15">hq</tspan></text>
                <text id="huynh_qui" dataname="huynh qui" transform="translate(58 7)" fill="#0f141e" fontSize="23" fontFamily="Helvetica-Bold, Helvetica" fontWeight="700" letterSpacing="0.08em"><tspan x="0" y="18">huynh qui</tspan></text>
                <text id="WEB_DEVELOPER" dataname="WEB DEVELOPER" transform="translate(59 34)" fill="#0f141e" fontSize="10" fontFamily="Helvetica" letterSpacing="0.3em"><tspan x="0" y="8">WEB DEVELOPER</tspan></text>
            </g>
        </svg>
    )
}
