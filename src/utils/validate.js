export const checkValidateData = (email, password) =>{

    const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);

    if(!isEmailValid) return "Email id is not valid"; //if email is not valid then return this
    if(!isPasswordValid) return "Password is not valid"; //if password is not valid then reuturn this

    return null; // when email and password both are valid
}