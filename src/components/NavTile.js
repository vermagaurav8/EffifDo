import React from 'react'

function NavTile({icon, title}) {
  return (
    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
        {React.cloneElement(icon, { className: 'text-2xl text-gray-600 group-hover:text-white' })}
        <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
            {title}
        </h3>
    </div>
  )
}

export default NavTile