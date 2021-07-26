import React from 'react';
import './importIcons'
import './icon.scss'
import classes from './helpers/classes';

// Props's Type
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

// declare Icon as a react function component
const Icon: React.FunctionComponent<IconProps> = (props) => {

    // es6 multiple object init
    const {className, name, ...restProps} = props;

    return (
        <svg className={classes('lui-icon', className)}
            {...restProps}
        >
            <use xlinkHref={`#${name}`}/>
        </svg>
    )
}

export default Icon;