import React,{useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updatePassword } from "../../actions/auth";

const ChangePassword = ({updatePassword}) => {
    const [formData, setFormData] = useState({
        newPassword:"",
        confirmPassword:""
    })
    let {currentPassword,newPassword,confirmPassword} = formData;

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async (e) => {
        e.preventDefault()
        if(newPassword===confirmPassword){
        updatePassword({currentPassword,newPassword});
        } else{
            console.log('Password Not Match')
        }
    };


  return (
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="grid place-items-center  my-20 sm:my-auto">
        <div
          class="w-4/5 p-12 sm:w-4/5 md:w-3/4 lg:w-3/4 2xl:w-3/5
                    px-6 py-10 sm:px-10 sm:py-6 
                    bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h1 class="text-center font-bold text-5xl lg:text-4xl text-gray-800">
            UPDATE PASSWORD
          </h1>

          <form class="mt-7" onSubmit={e=>onSubmit(e)}>
          
            <input
              id="currentpassword"
              type="password"
              name="currentPassword"
              placeholder="Current password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-1 
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              onChange={e => onChange(e)}
            />

           
            <input
              id="newpassword"
              type="password"
              name="newPassword"
              placeholder="New Password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              onChange={e => onChange(e)}

            />

           
            <input
              id="confirmpassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm  Password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              onChange={e => onChange(e)}

            />

            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

ChangePassword.propTypes = {
    updatePassword:PropTypes.func.isRequired,
};

export default connect(null,{updatePassword})(ChangePassword);
