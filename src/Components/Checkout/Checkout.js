import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Purchese() {
  const cartItems = useSelector((state) => state.cartItems);
  let cost = 0;

  // total cost calculation
  for (let i = 0; i < cartItems.length; i++) {
    cost += cartItems[i].price * cartItems[i].quantity;
  }

  function shortTitle(title) {
    let updatedTitle =
      title.length > 40 ? title.substring(0, 40) + "..." : title;
    return updatedTitle;
  }

  return (
    <>
      <div className='h-full mt-8 mr-2 font-sans font-medium'>
        {cartItems.map(({ title, price, quantity }, index) => (
          <div
            className='w-full p-2 m-2 border lg:m-auto lg:w-1/2 md:m-2 md:p-4 lg:p-4'
            key={index}
          >
            <ul className='flex justify-between p-2'>
              <li className='w-10'> {index + 1}&nbsp;.</li>
              <li className='w-48'>{shortTitle(title)}</li>
              <li className='w-10'> $&nbsp;{price} </li>
              <li className='w-auto'> &nbsp; x &nbsp; </li>
              <li className='w-auto'>{quantity} </li>
              <li className='w-auto'> &nbsp; = &nbsp; </li>
              <li className='w-auto'>$&nbsp;{quantity * price}</li>
            </ul>
          </div>
        ))}

        <div className='flex justify-end w-1/2 p-2 m-auto mt-4 border'>
          <hr></hr>
          Total Cost : $&nbsp;{cost.toFixed(2)}
        </div>

        <div className='flex flex-row justify-between w-1/2 p-2 m-auto'>
          <button className='px-2 py-1 my-10 text-base text-white bg-blue-700 rounded shadow-2xl'>
            <Link to='/'> Back To Home </Link>
          </button>
          <button className='px-2 py-1 my-10 text-base text-white bg-green-700 rounded shadow-2xl'>
            <Link to='/purchese_request'> Purchese </Link>
          </button>
        </div>
      </div>
    </>
  );
}
