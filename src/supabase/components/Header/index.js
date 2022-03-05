import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { AuthUser } from 'src/supabase/hooks/useAuth';
import MenuLogado from './menuLogado';
import MenuNotLogado from './menuNotLogado';

import classNames from '../../../utils/classsesNames';

const Navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Login', href: '/sign-in', current: false },
  { name: 'Profile', href: '/profile', current: false },
  { name: 'Account', href: '/youtube', current: false },
  { name: 'Swipe Movies', href: '/youtube/swipe-movies', current: false },
  { name: 'Movie Watchlist', href: '/youtube/watchlist', current: false },
];
export default function Header() {
  console.log('This is AuthUser()', AuthUser());

  return (
    <Disclosure
      as="nav"
      style={{ background: '#181818' }}
      className="bg-gray-800"
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0 text-white">
                  <img
                    className="w-auto h-8"
                    src="https://supabase.com/images/logo-dark.png"
                    alt="supabase"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    IDK
                    {Navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/** notifications */}

                {AuthUser() == null ? <MenuNotLogado /> : <MenuLogado />}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              IDK
              {Navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
