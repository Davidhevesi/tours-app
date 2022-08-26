import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="bg-amber-500 mb-4 rounded-lg overflow-hidden">
      <img src={image} alt={name} />
      <div className="px-4 py-4 space-y-4">
        <div className="flex justify-between">
          <h4 className="text-white">{name}</h4>
          <h4 className="bg-amber-400 px-2 text-white font-semibold rounded-lg">
            ${price}
          </h4>
        </div>
        <p className="text-white">
          {readMore ? info : `${info.substring(0, 200)}...`}
        </p>
        <button className="text-white bg-amber-400 px-4 py-2 rounded-lg">
          Not Interestes
        </button>
      </div>
    </div>
  );
};

export default Tour;
