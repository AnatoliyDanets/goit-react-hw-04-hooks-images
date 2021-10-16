// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

export default function App() {
  const [searchName, setSearchName] = useState("");

  const [largeImageURL, setLargeImageURL] = useState("");
  const [tags, setTags] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (searchName) => {
    setSearchName(searchName);
  };

  const onOpenModal = (e) => {
    setLargeImageURL(e.target.dataset.source);
    console.log(e.target);
    setTags(e.target.dataset.alt);

    toggleModal();
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Searchbar submit={handleSubmit} />
      <ImageGallery onOpenModal={onOpenModal} query={searchName} />
      {showModal && (
        <Modal
          onClose={toggleModal}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
