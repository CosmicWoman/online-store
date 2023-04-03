import React, {FC, PropsWithChildren} from 'react';

interface OptionItem {
    value: string;
    name: string;
}

interface Filter {
    options: OptionItem[];
    value: string;
    onChange: (value:string) => void
}

const MySelect: FC<PropsWithChildren<Filter>> = ({options, value, onChange}) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option> )}
        </select>
    );
};

export default MySelect;