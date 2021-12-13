/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type props = {
  data: any;
};
const FYPCard: FC<props> = ({ data }) => {
  let navigate = useNavigate();
  console.log("data is", data);

  const handlePageChange = () => {
    navigate(`/editor/${data.id}`);
  };
  return (
    <div className="d-flex justify-content-start mt-4">
      <div
        className="card"
        style={{
          backgroundColor: "#1b1c17",
          width: 500,
          paddingLeft: 20,
          paddingTop: 10,
        }}
      >
        <div className="row d-flex" style={{ flex: 1, marginLeft: 10 }}>
          <div
            style={{
              flex: 0.1,
              margin: 0,
              padding: 0,
            }}
          >
            <img
              src={data.organization.user.profile_image.path}
              className="card-img-top"
              style={{
                borderRadius: 50,
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            />
          </div>
          <div
            style={{
              flex: 0.9,
              paddingTop: 20,
              marginLeft: 10,
            }}
          >
            <h4 style={{ color: "white" }}>Netsol</h4>
            <p style={{ color: "white" }}>
              {new Date(data.created_at).toDateString()}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h3
            className="card-title"
            style={{ color: "white", textAlign: "center" }}
          >
            {data.name}
          </h3>
          <p
            className="card-title"
            style={{ color: "white", textAlign: "center" }}
          >
            {data.description}
          </p>

          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-success"
              onClick={handlePageChange}
            >
              Appear for Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FYPCard;
