import React from 'react';

// Props's Type
interface IconProps {
    name: string,
}

// declare Icon as a react function component
const Icon:React.FunctionComponent<IconProps> = (props) => {
    return (
        <span>
            Icon
        </span>
    )
}

export default Icon;