"use client";
import { MdDelete } from "react-icons/md";

export default function DeleteButton({ props }) {
  
  const onClickHandler = () => {
    alert(`Deleting Item: ${props}`);
    console.log("delete button clicked");
  };
  return (
    <div>
      <button onClick={() => onClickHandler}>
        <MdDelete className="h-5 w-5 text-red-900" />
      </button>
    </div>
  );
}
