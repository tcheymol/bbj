import React from 'react';
import { LandContext, MowersContext } from '../App';
import { Land } from '../Domain/Mowing/Land';
import { Mower } from '../Domain/Mowing/Mower';

const isMowed = (land:  Land, x: number, y: number): boolean => {
    return land.mowedPoints.some(point => point.x === x && point.y === y);
}

const hasMower = (mowers: Array<Mower>, x: number, y: number): boolean => {
    return mowers.some(mower => mower.getCoordinates() === `${x}${y}`);
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
       }}
       />
    </div>
    );
}
