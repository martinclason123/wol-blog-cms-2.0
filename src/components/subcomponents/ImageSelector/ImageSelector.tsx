"use client";
import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  overflow-y: scroll;
  padding-top: 1.5em;
`;

export const Card = styled.div`
  width: 48%;
  cursor: pointer;
  position: relative;
  overflow: visible;
`;

export const CardImage = styled.img`
  width: 100%;
  display: block;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const BlankImage = styled.div`
  width: 100%;
  display: block;
  height: auto;
  aspect-ratio: 1/1;
  background-color: #000;
`;
export const BlankImageWrapper = styled.div`
  position: relative;
`;

export const ImageTitle = styled.p`
  font-size: 1.2em;
  text-align: center;
  padding-top: 0.5em;
`;

export const SelectedImage = styled(CardImage)`
  width: 96%;
`;

export const SelectedImageButton = styled.button`
  font-size: 1.4em;
  background-color: #000;
  color: #fff;
  padding: 0.5em 0;
  cursor: pointer;
`;
export const BackButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: left;
  font-size: 2em;
  cursor: pointer;
  margin-top: 0.5em;
`;

export const PlusIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 5em;
`;

export const UploadingMessage = styled(PlusIcon)`
  font-size: 2em;
`;

export const DeleteImage = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
  font-size: 1.2em;
  border-radius: 50%;
  position: absolute;
  top: -1em;
  right: 0.5em;
  width: 2em;
  height: 2em;
  cursor: pointer;
  z-index: 9999;
`;

export const DeleteAllButton = styled.button`
  background: transparent;
  color: red;
  border: none;
  padding-top: 4em;
  text-align: right;
  padding-right: 2em;
  font-size: 1.8em;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;

import React, { useContext, useState, useRef, useEffect } from "react";
import { ModulesContext } from "@/context/ModulesContext";

const ImageSelector = ({ selectedImage, onSelectImage }) => {
  const [selectingImage, setSelectingImage] = useState(false);
  const { uploadImage, imageGallery, setImageGallery, deleteImage } =
    useContext(ModulesContext); // Use the context
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageSelect = (image) => {
    onSelectImage(image);
    setSelectingImage(false);
  };

  useEffect(() => {}, [imageGallery]);

  const uploadFiles = async (files) => {
    setUploading(true);
    for (const file of files) {
      await uploadImage(file);
    }
    setUploading(false);
  };

  const handleFileSelect = async (event) => {
    const files = event.target.files;
    if (files.length) {
      await uploadFiles(files);
      event.target.value = null;
    }
  };

  const handleDeleteImage = async (e, image) => {
    e.stopPropagation(); // Prevents triggering the image selection
    await deleteImage(image); // Delete the image
    setImageGallery((prevGallery) =>
      prevGallery.filter((img) => img !== image)
    );
  };

  const handleDeleteAllImages = async () => {
    for (const image of imageGallery) {
      await deleteImage(image);
    }
    setImageGallery([]); // Clear the image gallery
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      {selectingImage ? (
        <>
          <BackButton
            onClick={() => {
              setSelectingImage(false);
            }}
          >{`\u2190 Back`}</BackButton>
          <CardsContainer>
            <Card onClick={triggerFileInput}>
              <BlankImageWrapper>
                <BlankImage />
                {uploading ? (
                  <UploadingMessage>Uploading</UploadingMessage>
                ) : (
                  <PlusIcon>+</PlusIcon>
                )}
              </BlankImageWrapper>
              <ImageTitle>Add Image</ImageTitle>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
                accept="image/*"
                multiple
              />
            </Card>

            {imageGallery.map((image) => (
              <Card key={image} onClick={() => handleImageSelect(image)}>
                <DeleteImage onClick={(e) => handleDeleteImage(e, image)}>
                  X
                </DeleteImage>
                <CardImage src={`/gallery/${image}`} alt="Banner image" />
                <ImageTitle>{image}</ImageTitle>
              </Card>
            ))}
          </CardsContainer>
          <DeleteAllButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteAllImages();
            }}
          >
            Delete All
          </DeleteAllButton>
        </>
      ) : (
        <>
          {selectedImage ? (
            <SelectedImage
              src={`/gallery/${selectedImage}`}
              alt="Banner image"
            />
          ) : null}

          <ImageTitle>{selectedImage}</ImageTitle>
          <SelectedImageButton onClick={() => setSelectingImage(true)}>
            Select Image
          </SelectedImageButton>
        </>
      )}
    </>
  );
};

export default ImageSelector;
