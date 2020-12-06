import React from 'react';
import ReactSelect from 'react-select';
import { theme } from '../../utils/style/theme';
import { Box } from '../Box';
import { SelectProps } from './types';

const Select = ({
    isMulti,
    onChange,
    options,
    placeholder,
    value,
    ...styleProps
}: SelectProps) => (
        <Box minWidth={175} {...styleProps}>
            <ReactSelect
                isMulti={isMulti}
                closeMenuOnSelect={!isMulti}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
                theme={(baseTheme) => ({
                    ...baseTheme,
                    colors: {
                        ...baseTheme.colors,
                        primary25: theme.colors.background,
                        primary: theme.colors.primary,
                    },
                })}
                isClearable
            />
        </Box>
    );

export { Select };