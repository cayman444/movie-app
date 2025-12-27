import { MenuOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { HEADER_MENU } from '../constants';

export const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeVisible = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {createPortal(
        <div
          className={clsx(
            'fixed inset-0 bg-neutral-900/70 z-2 transition-all duration-300',
            {
              'opacity-100 pointer-events-auto': isOpen,
              'opacity-0 pointer-events-none': !isOpen,
            }
          )}
        />,
        document.body
      )}

      <Dropdown
        open={isOpen}
        onOpenChange={handleChangeVisible}
        overlayClassName="!pt-4 [&_.ant-dropdown-menu-item]:!px-4 [&_.ant-dropdown-menu-item]:!py-2"
        menu={{ items: HEADER_MENU }}
      >
        <div
          className={clsx(
            'flex items-center gap-2 cursor-pointer font-semibold [&>*]:!transition-all',
            isOpen && '[&>*]:!text-neutral-400'
          )}
        >
          <MenuOutlined style={{ fontSize: 18, cursor: 'pointer' }} />
          <h2>ПоискКино</h2>
        </div>
      </Dropdown>
    </>
  );
};
