import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPricing } from "../../actions/profile";

const Price = ({ profile, getPricing, price }) => {
  console.log(price);

  useEffect(() => {
    getPricing();
  }, []);
  return profile && profile.isContact && profile.isContact === "approve" ? (
    <div>
      <div>
        <h2 className="flex justify-center font-bold mt-10">Price Data</h2>
        <table class="table-fixed w-full mt-10">
          <thead>
            <tr className="flex justify-center">
              <th class="w-1/5 ...">Product</th>
              <th class="w-1/5 ...">Check</th>
              <th class="w-1/5 ...">State</th>
              <th class="w-1/5 ...">City</th>
              <th class="w-1/5 ...">Rural Price</th>
              <th class="w-1/5 ...">Urban Price</th>
              <th class="w-1/5 ...">TAT</th>
            </tr>
          </thead>

          <tbody>
            {price &&
              price.map((e) => {
                return (
                  <tr className='flex w-full'>
                    <td class="w-1/5 flex justify-center ...">{e.product}</td>
                    <td class="w-1/5 flex justify-center ...">{e.check}</td>
                    <td class="w-1/5 flex justify-center ...">{e.State}</td>
                    <td class="w-1/5 flex justify-center ...">{e.city}</td>
                    <td class="w-1/5 flex justify-center ...">{e.ruralPrice}</td>
                    <td class="w-1/5 flex justify-center ...">{e.urbanPrice}</td>
                    <td class="w-1/5 flex justify-center ...">{e.TAT}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div>Contact to admin</div>
  );
};

Price.propTypes = {
  getPricing: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  price: state.profile.pricing,
});

export default connect(mapStateToProps, { getPricing })(Price);
