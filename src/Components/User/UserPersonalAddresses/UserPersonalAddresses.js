import React from "react";
import ButtonComponent from "../../Utility/ButtonComponent/ButtonComponent";
import UserPersonalAddressCard from "../UserPersonalAddressCard/UserPersonalAddressCard";
import { Link } from "react-router-dom";
import GetAllUserAddressesHook from "../../../CustomHooks/User/Addresses/GetAllUserAddressesHook";
import SpinnerComponent from "../../Utility/SpinnerComponent/SpinnerComponent";
import NotFoundData from '../../../Components/Utility/NotFoundData/NotFoundData'
import { Col, Row } from "react-bootstrap";
const UserPersonalAddresses = () => {
  const [addresses,loading] = GetAllUserAddressesHook();
  return (
    <div className="user-personal-addresses">
      <Row className="position-relative">
      {loading === false ? (
        addresses?
        addresses.data? (
          addresses.data.map((item) => {
            return (
              <Col xs="12" sm="6" key={item._id}>
                <UserPersonalAddressCard
                  key={item._id}
                  alias={item.alias}
                  details={item.details}
                  phone={item.phone}
                  city={item.city}
                  postalCode={item.postalCode}
                  id={item._id}
                />
              </Col>
            );
          })
        ) : (
          <NotFoundData />
        )
        : (
          <NotFoundData />
        )
      ) : (
        <SpinnerComponent />
      )}
      </Row>
      <Link to={"/user/userAddAddressPage"}>
        <ButtonComponent btnValue={"New Address"} />
      </Link>
    </div>
  );
};

export default UserPersonalAddresses;
