'use client';

import { Dropdown, DropdownProps } from '@xipkg/dropdown';
import { MenuItem, Typography } from '@mui/material';
import { ArrowUp } from '@xipkg/icons';

const DropdownElement = ({ isOpened }: { isOpened: boolean }) => (
  <>
    <Typography sx={{ fontSize: 'inherit', lineHeight: 'inherit' }}>Filled</Typography>
    <ArrowUp
      sx={{
        transform: `rotate(${isOpened ? '-' : ''}90deg)`,
        color: 'inherit',
        fontSize: 'inherit',
      }}
    />
  </>
);

const TestDropdowns: DropdownProps[] = [
  {
    Element: DropdownElement,
    size: 'l',
  },
  {
    Element: DropdownElement,
    size: 'm',
  },
  {
    Element: DropdownElement,
    size: 's',
  },
];

const TestComponents = () => (
  <>
    {TestDropdowns.map((dropdown, index) => (
      <Dropdown {...dropdown} key={`dropdown_${index}`}>
        <MenuItem>Item 1</MenuItem>
      </Dropdown>
    ))}
  </>
);

export default TestComponents;
