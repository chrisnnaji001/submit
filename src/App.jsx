import { useSelector } from "react-redux";
import { addFavorite, removeFavorite} from "./redux/recuder/favoriteSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const App = () => {
  // Redux
  const dispatch = useDispatch();
  const favoriteFlavors = useSelector((state) => state.favorites);

  // local state
  const [newFlavor, setNewFlavor] = useState('')

  const handleRemoveFavorite = (flavor) =>{
    dispatch(removeFavorite(flavor));
  };

  //handle submit
  const handleSubmit = (e) => {
    //prevent default submit
    e.preventDefault();
    dispatch(addFavorite(newFlavor));

    setNewFlavor('');
  }

  return (
    <>
       <div>
        <h1>Ice Cream Flavors</h1>
        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder="Enter your favorite flavor"
          value={newFlavor}
          onChange={(e) => setNewFlavor(e.target.value)}/>
          <button type="submit">Add</button>
        </form>

       </div>

       <div>
        {favoriteFlavors.map((flavor, index) =>(
          <div key={index}>
            <div>
              
              {flavor}
              <button id="removeBtn" onClick={() => handleRemoveFavorite(flavor)}>Remove</button>
            </div>
            </div>

        ))}
       </div>
     
      </>
  )
}

export default App