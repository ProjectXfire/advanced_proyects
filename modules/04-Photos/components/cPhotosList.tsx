import React, { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
// External libraries
import { AiOutlineSearch } from "react-icons/ai";
// Interfaces
import { Photo } from "../interfaces";
// Services
import { getPhotos } from "../services";
// Styles
import style from "styles/Photo.module.scss";
import Default from "public/assets/no-image.png";

export const PhotosList = () => {
  //--> Hooks

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  //--> Methods

  const onSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
  };

  const onLoadMorePhotos = () => {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    if (scrollY + innerHeight >= bodyHeight + 56 && !loading && !noMoreData) {
      console.log("Call api");
      setPage((pv) => pv + 1);
    }
  };

  //--> Effects

  useEffect(() => {
    setLoading(true);
    getPhotos(page, search)
      .then((data) => {
        if (page < 2) {
          setPhotos(data);
        } else {
          setPhotos([...photos, ...data]);
        }
        setLoading(false);
      })
      .catch(() => {
        setNoMoreData(true);
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", onLoadMorePhotos);
    return () => {
      window.removeEventListener("scroll", onLoadMorePhotos);
    };
  }, [loading]);

  //--> Renders

  return (
    <section className={style["photos"]}>
      <form className={style["photos__search"]} onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineSearch />
      </form>
      <ul className={style["photos__list"]}>
        {photos.map((photo, index) => (
          <li key={photo.id + index}>
            <NextImage
              loader={() => photo.urls.small}
              fill
              src={photo.id}
              alt="default"
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
            <NextLink href={"/"} target="_blank">
              <div className={style["photo"]}>
                <div>
                  <span>{photo.user.name}</span>
                  <span>{photo.likes}</span>
                </div>
                <div>
                  <NextImage
                    width={40}
                    height={40}
                    loader={() => photo.user.profile_image.medium}
                    src={photo.user.name}
                    alt="default"
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                  />
                </div>
              </div>
            </NextLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
