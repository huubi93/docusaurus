/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useRef, useEffect} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import {isSamePath} from '@docusaurus/theme-common';
import type {
  DesktopOrMobileNavBarItemProps,
  Props,
} from '@theme/NavbarItem/DropdownNavbarItem';
import NavLink from '@theme/NavbarItem/DefaultNavbarItem';
import NavbarItem from '@theme/NavbarItem';

const dropdownLinkActiveClass = 'dropdown__link--active';

function NavItemDesktop({
  items,
  position,
  className,
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setShowDropdown(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      ref={dropdownRef}
      className={clsx('navbar__item', 'dropdown', 'dropdown--hoverable', {
        'dropdown--left': position === 'left',
        'dropdown--right': position === 'right',
        'dropdown--show': showDropdown,
      })}>
      <NavLink
        className={clsx('navbar__item navbar__link', className)}
        {...props}
        onClick={props.to ? undefined : (e) => e.preventDefault()}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setShowDropdown(!showDropdown);
          }
        }}>
        {props.children ?? props.label}
      </NavLink>
      <ul ref={dropdownMenuRef} className="dropdown__menu">
        {items.map((childItemProps, i) => (
          <NavbarItem
            isDropdownItem
            onKeyDown={(e) => {
              if (i === items.length - 1 && e.key === 'Tab') {
                e.preventDefault();
                setShowDropdown(false);
                const nextNavbarItem = dropdownRef.current!.nextElementSibling;
                if (nextNavbarItem) {
                  (nextNavbarItem as HTMLElement).focus();
                }
              }
            }}
            activeClassName={dropdownLinkActiveClass}
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}

function NavItemMobile({
  items,
  className,
  position: _position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: DesktopOrMobileNavBarItemProps) {
  const menuListRef = useRef<HTMLUListElement>(null);
  const {pathname} = useLocation();
  const [collapsed, setCollapsed] = useState(
    () => !items?.some((item) => isSamePath(item.to, pathname)) ?? true,
  );

  const menuListHeight = menuListRef.current?.scrollHeight
    ? `${menuListRef.current?.scrollHeight}px`
    : undefined;

  return (
    <li
      className={clsx('menu__list-item', {
        'menu__list-item--collapsed': collapsed,
      })}>
      <NavLink
        role="button"
        className={clsx('menu__link menu__link--sublist', className)}
        {...props}
        onClick={(e) => {
          e.preventDefault();
          setCollapsed((state) => !state);
        }}>
        {props.children ?? props.label}
      </NavLink>
      <ul
        className="menu__list"
        ref={menuListRef}
        style={{height: collapsed ? undefined : menuListHeight}}>
        {items.map((childItemProps, i) => (
          <NavbarItem
            mobile
            isDropdownItem
            onClick={props.onClick}
            activeClassName="menu__link--active"
            {...childItemProps}
            key={i}
          />
        ))}
      </ul>
    </li>
  );
}

function DropdownNavbarItem({mobile = false, ...props}: Props): JSX.Element {
  const Comp = mobile ? NavItemMobile : NavItemDesktop;
  return <Comp {...props} />;
}

export default DropdownNavbarItem;
