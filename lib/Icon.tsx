import React from 'react';
import './importIcons'
import './icon.scss'

// Props's Type
interface IconProps {
    name: string,
}

// declare Icon as a react function component
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className="lui-icon">
            <use xlinkHref={`#${props.name}`} />
        </svg>
    )
}

export default Icon;