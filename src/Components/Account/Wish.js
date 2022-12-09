import { useDispatch } from "react-redux"
import { data } from "../../Components/Shop/data";
import { getLikeArray} from "../../Redux/cartSlice";
import { useSelector } from "react-redux";
import { removeItemFromLike } from "../../Redux/cartSlice";
import { addItemToCart2 } from "../../Redux/cartSlice";
import { useAuth0 } from "@auth0/auth0-react"


function Wish(){

    const likeArray= useSelector(getLikeArray);

    const dispatch=useDispatch()
    const {isAuthenticated}=useAuth0()

    return( 
        isAuthenticated ?( 
            <div>
            <h1>Your wish list:</h1>
            
            {likeArray.length===0?(
                <div>
                   <p>Your wish list is empty</p>
                </div>
            ):(<div >
                {likeArray.map((cartItem,index)=>{
                const dresses = data.find(item=>item.id === cartItem.dressId)
                return(
                <div key={index}>
                    <p>{dresses.name}</p>
                    <div>
                       <img alt='dress' width="100px"  src={dresses.image[0]}/>
                    </div>
                    <p>{cartItem.size}</p>
                    <p>Price : <span className="bolder">${cartItem.price}</span></p>
                    <button onClick={()=>dispatch(addItemToCart2({cartItem,index}))} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg></button>
                    <span onClick={()=>dispatch(removeItemFromLike({cartItem,index,cartItemID: cartItem.id}))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                </svg>  </span>
                </div>
                )
                })}
            </div>)}
        </div>
        ):(<div>
            <h4 style={{marginTop:'70px'}}>Login...</h4>
        </div>
        )
    )
}

export default Wish;