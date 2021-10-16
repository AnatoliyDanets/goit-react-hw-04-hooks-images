import { useState, useEffect } from "react";
import API from "../../API/pixabay-api";
import Button from "../Button";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import LoaderComponent from "../Loader/Loader";
import { toast } from "react-toastify";
import s from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({ onOpenModal, query }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  if (query !== searchName) {
    setSearchName(query);
    setPage(1);
    setImages([]);
  }
  // useEffect(() => {
  //   setImages([]);
  // }, [query]);

  useEffect(() => {
    if (!query) return;
    toggleLoader();

    fetchApi();
    // eslint-disable-next-line
  }, [query, page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 800);
  };
  const fetchApi = () => {
    API.imageAPI(query, page)
      .then((image) => {
        if (image.hits.length === 0) {
          toast.error("No images found on your query");
        }
        setImages((prev) => [...prev, ...image.hits]);
        toggleLoader();
      })
      .catch(setError(error));
  };

  const toggleLoader = () => {
    setLoading((prev) => !prev);
  };
  return (
    <div>
      <ul className={s.ImageGallery}>
        {images.map(({ tags, webformatURL, largeImageURL }, index) => {
          return (
            <ImageGalleryItem
              key={index}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onOpenModal={onOpenModal}
            />
          );
        })}
      </ul>
      {loading && <LoaderComponent />}
      {images.length >= 12 && (
        <Button OnClick={loadMore} children={"Show more"} />
      )}
    </div>
  );
}
