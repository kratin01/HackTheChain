import React from 'react'

export function Card(props) {
  return (
    <div className="relative h-[320px] w-[270px] rounded-lg">
      <img
        src={props.img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{props.name}</h1>
        <p className="mt-2 text-sm text-gray-300">
            {props.details}
        </p>
        <p className="mt-2 text-sm font-semibold text-white">
        {props.number}
        </p>
        <p className="mt-2 text-sm font-semibold text-white">
        {props.email}
        </p>
      </div>
    </div>
  )
}

export default Card