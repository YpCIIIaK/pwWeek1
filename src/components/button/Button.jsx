import React from 'react';
import '../../style/components/Button.scss';
import PencilIcon from '../../style/icons/pencil.svg?react';
import PlusIcon from '../../style/icons/plus.svg?react';

const Button = ({ title, iconLeft, iconRight }) => {
    const renderIcon = (position) => {
        if (position === 'pencil') {
            return <PencilIcon />;
        }
        if (position === 'plus') {
            return <PlusIcon />;
        }
        return null;
    };

    return (
        <div className="button_default_primary">
            {iconLeft && <span className="button_default_primary__icon-left">{renderIcon(iconLeft)}</span>}
            {title && <span className="button_default_primary__title">{title}</span>}
            {iconRight && <span className="button_default_primary__icon-right">{renderIcon(iconRight)}</span>}
        </div>
    );
};

export default Button;