import React from "react";
import { Modal } from "antd"; // Import Modal component from Ant Design
import "./MovieDetail.css";
import { CaretRightOutlined } from "@ant-design/icons";

function MovieDetail({ movie, onClose }) {
  return (
    <Modal visible={true} onCancel={onClose} footer={null}>
      <div className="popup-content">
        <div className="popup-content-left">
          <img src={`http://localhost:5000/uploads/${movie.image}`} />
        </div>
        <div className="popup-content-right">
          <div className="name-film">{movie.name}</div>
          <div className="time">
            <p>Thời gian: {movie.time} phút</p>
            <p>Năm phát hành: {movie.year}</p>
          </div>
          <div>
            <p> {movie.introduce}</p>
          </div>
          <div>
            <button className="btn-play">
              {" "}
              <CaretRightOutlined />
              Play More
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default MovieDetail;
