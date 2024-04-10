"use client";
import styled from "styled-components";
import React, { useState, useEffect, useContext, useRef, use } from "react";
import { ModulesContext } from "@/context/ModulesContext";
import { ZipIcon } from "@/svgs";
const GalleryWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 12em;
`;
const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  max-width: 800px;
  margin: 4em auto 0 auto;
  width: 100%;
`;

const GalleryCard = styled.div`
  max-width: 250px;
  min-width: 31.5%;
  display: block;
  height: auto;
  aspect-ratio: 1/1;
  position: relative;
  margin-bottom: 1em;
`;
const GalleryImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

const ImageTitle = styled.div`
  max-width: 85%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
`;

const ImageName = styled.p`
  font-size: 1.5em;
  text-align: center;
`;

const DeleteImage = styled.button`
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
const BlankImageWrapper = styled.div`
  position: relative;
`;
const BlankImage = styled.div`
  width: 100%;
  display: block;
  height: auto;
  aspect-ratio: 1/1;
  background-color: #000;
  cursor: pointer;
`;

const PlusIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 5em;
`;

const UploadingMessage = styled(PlusIcon)`
  font-size: 2em;
`;

const DeleteAllButton = styled.button`
  background: transparent;
  color: red;
  border: none;
  padding-top: 4em;
  text-align: right;

  font-size: 1.8em;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
  right: 0;
`;
const DownloadWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2em 0 4em 0;
`;

const DownloadButton = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5em;
`;
const DownloadText = styled.span`
  font-size: 1.8em;
  text-decoration: underline;
  text-underline-position: under;
`;

export const HoverDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;

const ZipIconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HoverText = styled.p`
  color: #fff;
  font-size: 1.5em;
`;

const FailedList = styled.ul`
  list-style: none;
  margin: 2em 0;
`;

const FailedListItem = styled.li`
  font-size: 1.5em;
  color: red;
`;

const FailedMessage = styled.p`
  font-size: 1.5em;
  color: red;
`;

const Uploads = () => {
  const [uploading, setUploading] = useState(false);
  const [compressing, setCompressing] = useState(false);
  const [failedCompression, setFailedCompression] = useState([]);
  const [passedCompression, setPassedCompression] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);

  const fileInputRef = useRef(null);

  const { uploadImage, imageGallery, setImageGallery, deleteImage } =
    useContext(ModulesContext);

  const handleDeleteImage = async (e, image) => {
    e.stopPropagation();
    await deleteImage(image);
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

  const handleDownloadAll = async (imageGallery) => {
    setCompressing(true);
    let tempPassed = [];
    let tempFailed = [];
    try {
      for (let file of imageGallery) {
        // set current file to the index of the current file, 1 of 15 for example
        setCurrentFile(
          `Compressing file ${imageGallery.indexOf(file) + 1} of ${
            imageGallery.length
          }`
        );

        // send the file name to the /compress endpoint as a post request
        const response = await fetch("/api/compress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fileName: file }),
        });

        // check if the response is ok
        if (!response.ok) {
          setFailedCompression((prev) => [...prev, file]);
          tempFailed.push(file);
          if (file === imageGallery[imageGallery.length - 1]) {
            setCompressing(false);
          }
        }
        // add the successfully compressed filename to the passedCompression array
        setPassedCompression((prev) => [...prev, file]);
        tempPassed.push(file);
        // last file? stop spinner
        if (file === imageGallery[imageGallery.length - 1]) {
          setCompressing(false);
          setPassedCompression(tempPassed);
          setFailedCompression(tempFailed);
          handleDownloadRequest(tempPassed);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadRequest = async (fileNamesArray) => {
    console.log("fileNamesArray: ", fileNamesArray);
    setCurrentFile("Zipping up your files...");
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fileNames: fileNamesArray }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle the binary data (ZIP file)
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.setAttribute("download", "download.zip"); // You can set a custom file name here
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);

      setCurrentFile("Complete!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setCurrentFile("Download failed.");
    }
  };

  return (
    <GalleryWrapper>
      <DownloadWrapper>
        {!compressing && (
          <DownloadButton>
            <ZipIcon width={".5em"} />
            <DownloadText
              onClick={() => {
                handleDownloadAll(imageGallery);
              }}
            >
              Compress and download All
            </DownloadText>
          </DownloadButton>
        )}
      </DownloadWrapper>
      {compressing ? (
        <>
          <DownloadText>{currentFile}</DownloadText>
        </>
      ) : null}
      {failedCompression.length ? (
        <>
          <FailedMessage>Compression failed for:</FailedMessage>

          <FailedList>
            {failedCompression.map((file) => (
              <FailedListItem key={file}>{file}</FailedListItem> // Ensure you return the list item
            ))}
          </FailedList>
          <FailedMessage>
            Try removing any special characters and spaces.
          </FailedMessage>
        </>
      ) : null}

      <ImageGallery>
        <GalleryCard onClick={triggerFileInput}>
          <BlankImageWrapper>
            <BlankImage />
            {uploading ? (
              <UploadingMessage>Uploading</UploadingMessage>
            ) : (
              <PlusIcon>+</PlusIcon>
            )}
          </BlankImageWrapper>
          <ImageName>Add Image</ImageName>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
            accept="image/*"
            multiple
          />
        </GalleryCard>
        {imageGallery.map((image) => (
          <GalleryCard key={image}>
            <DeleteImage onClick={(e) => handleDeleteImage(e, image)}>
              X
            </DeleteImage>
            <BlankImageWrapper>
              <GalleryImage src={`/gallery/${image}`} />
              <HoverDiv
                onClick={() => {
                  handleDownloadAll([image]);
                }}
              >
                <ZipIconWrapper>
                  <ZipIcon width={"3em"} fill={"#fff"} />
                </ZipIconWrapper>
                <HoverText>Compress and download</HoverText>
              </HoverDiv>
            </BlankImageWrapper>
            <ImageTitle>
              <ImageName>{image}</ImageName>
            </ImageTitle>
          </GalleryCard>
        ))}
      </ImageGallery>
      <DeleteAllButton
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteAllImages();
        }}
      >
        Delete All
      </DeleteAllButton>
    </GalleryWrapper>
  );
};

export default Uploads;
