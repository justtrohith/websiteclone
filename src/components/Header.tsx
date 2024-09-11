import React from 'react';

function Header() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-center">
        <div className="h-[70px] w-[70px] bg-black">
          <span className="text-white flex items-center justify-center h-full">Logo</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
