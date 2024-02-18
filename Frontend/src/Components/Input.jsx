import React from 'react'

export function Input(props) {
  return (
    <div className="w-full ">
      <input
        className="my-10 flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder={props.name}
        id="name"
      ></input>
    </div>
  )
}

export default Input