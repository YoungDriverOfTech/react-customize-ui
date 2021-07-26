import React from 'react';
import './importIcons'

// Props's Type
interface IconProps {
    name: string,
}

// declare Icon as a react function component
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`} />
            </svg>
        </span>
    )
}

export default Icon;