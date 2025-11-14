import * as React from 'react';

export interface NgBadgeProps {
    label?: string;
}

export const NgBadge: React.FC<NgBadgeProps> = ({ label = "NuGraphix"}) => {
    return (
        <span className ="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            {label}
        </span>
    );
};