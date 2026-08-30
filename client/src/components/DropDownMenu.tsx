import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface DropDownMenuProps {
  label: string;
  items: string[];
  onSelect: (item: string) => void;
}

export default function DropDownMenu({
  label,
  items,
  onSelect,
}: DropDownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (item: string) => {
    handleCloseMenu();
    onSelect(item);
  };

  return (
    <>
      <Button
        aria-controls={isMenuOpen ? `${label.toLowerCase()}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={isMenuOpen ? 'true' : undefined}
        onClick={handleOpenMenu}
        endIcon={<ArrowDropDownIcon />}
        sx={{ color: 'text.secondary', px: { xs: 1, sm: 1.5 } }}
      >
        {label}
      </Button>

      <Menu
        id={`${label.toLowerCase()}-menu`}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        slotProps={{
          paper: {
            elevation: 3,
            sx: { mt: 1, minWidth: 140 },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item}
            onClick={() => handleSelectItem(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}