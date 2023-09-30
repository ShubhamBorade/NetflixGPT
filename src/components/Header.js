import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //if block will add the data to redux store when user signIn and else block will remove the user data from redux store when user signOut
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); //after successful singUp/signIn we will take user to browse page
      } else {
        dispatch(removeUser());
        navigate("/"); //after successful signOut we are taking the user to singIn/signOut page
      }
    });

    //unsubscribing onAuthStateChanged when our component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full sm:flex justify-between">
      <img className="w-48 max-[640px]:mx-auto " src={LOGO} alt="logo" />
      {/* it will show below code only when someone is signed in */}
      {user && (
        <div className="max-[640px]:flex max-[640px]:justify-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-800 text-white "
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="bg-blue-700 px-4 py-2 rounded mr-3 text-white hover:bg-blue-800"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded text-white bg-red-500 md:mt-3 font-semibold hover:bg-red-600"
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
