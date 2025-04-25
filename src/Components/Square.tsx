import React from 'react';
import { LandContext, MowersContext } from '../App';
import { Land } from '../Domain/Mowing/Land';
import { Mower } from '../Domain/Mowing/Mower';
import { get } from 'http';

const isMowed = (land:  Land, x: number, y: number): boolean =>
    land.mowedPoints.some(point => point.x === x && point.y === y);


const hasMower = (mowers: Array<Mower>, x: number, y: number): boolean =>
    getMower(mowers, x, y) !== null;

const getMower = (mowers: Array<Mower>, x: number, y: number): Mower|null =>
    mowers.find(mower => mower.getCoordinates() === `${x}${y}`) ?? null;

const getMowerRotation = (mowers: Array<Mower>, x: number, y: number): string => {
    const mower = getMower(mowers, x, y);
    if (mower === null) return '0';

    switch (mower.direction) {
        case 'W':
            return '0';
        case 'N':
            return '90';
        case 'E':
            return '180';
        case 'S':
            return '270';
        default:
            return '0';
    }
}

const getImagePath = (land:  Land, mowers: Array<Mower>, x: number, y: number): string => {
    if (hasMower(mowers, x, y)) {
        return `${process.env.PUBLIC_URL}/mower.png`;
    }

    return `${process.env.PUBLIC_URL}${isMowed(land, x, y) ? '/short.png'  : '/long.png'}` ;  

}

export default function({x, y}: {x: number, y: number}) {
    const land = React.useContext(LandContext);
    const mowers = React.useContext(MowersContext);
    const imagePath = getImagePath(land, mowers, x, y);
    const mowerRotation = getMowerRotation(mowers, x, y);

    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'green',
            border: '1px solid black',
        }}>
       <img src={imagePath} alt='grass' style={{
           width: '50px',
           height: '50px',
           objectFit: 'cover',
           transform: `rotate(${mowerRotation}deg)`,
       }}
       />
    </div>
    );
}
