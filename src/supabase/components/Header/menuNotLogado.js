import React from 'react';
import Link from 'next/link';

const MenuNotLogado = () => (
  <div className="flex space-x-4">
    <Link href="/auth">
      <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700">
        LOGIN
      </a>
    </Link>
  </div>
);

export default MenuNotLogado;
