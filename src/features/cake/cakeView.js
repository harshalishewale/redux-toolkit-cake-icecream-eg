import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const cakes = useSelector(state => state.cake.noofcakes)
    const dispatch = useDispatch()
    return (
        <>
            <div>No of cakes - {cakes}</div>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
        </>
    )
}
export default CakeView;
