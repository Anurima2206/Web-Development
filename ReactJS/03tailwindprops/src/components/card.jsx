import React from 'react';

function Card({username,price="###",image}){
    
    //console.log(props.username);
    return(
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ml-150 m-4">
      <div>
        <img
          src={image}
          alt="test"
          className="object-cover object-center rounded-t-l"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-around ">
          <h4 className="font-bold ">{username}</h4>
          <h5>Price</h5>
        </div>
        <div className="flex  justify-between">
          <p>{price}</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
    )
}
export default Card