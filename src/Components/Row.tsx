import React from 'react';
import Square from './Square';

export default function ({width, x}: {x: number, width: number}) {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
    }}>
        {[...Array(width)].map((_, i) => <Square key={i} x={x} y={i + 1} />)}
    </div>
} 
