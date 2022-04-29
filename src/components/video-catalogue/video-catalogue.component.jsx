import {
  VideoCatalogueContainer,
  VideoPlayer,
  VideoArrayContainer,
  ModalContainer,
  StyledModal,
  ThumbnailContainer,
  VideoWrapper,
  ThumbnailWrapper,
  IconWrapper,
} from "./video-catalogue.styles";
import Modal from "react-modal";
import { useState } from "react";
import VideoThumbnail from "react-video-thumbnail";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const circleIcon = <FontAwesomeIcon icon={faCirclePlay} />;

const VideoCatalogue = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState("");

  const toggleModal = () => setIsOpen(!modalIsOpen);

  const openModal = (url) => {
    toggleModal();
    setModalVideo(url);
  };

  const VideoArray = [
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Amazon+-+Sustainability+Challenge.mp4",
      id: 1,
    },
    {
      filename: "https://dx501lltpgacl.cloudfront.net/Amazon+X+Seenit.mp4",
      id: 2,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/H%26M+-+Community+Meet+Up.mp4",
      id: 3,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Seenit+-+Employee+Spotlight+(CS+-+Roxane).mp4",
      id: 4,
    },
    {
      filename:
        "https://dx501lltpgacl.cloudfront.net/Sony+-+Customer+Showcase.mp4",
      id: 5,
    },
    {
      filename: "https://dx501lltpgacl.cloudfront.net/V2.mp4",
      id: 6,
    },
  ];

  return (
    <VideoCatalogueContainer>
      <h2>Here's what I've done...</h2>
      <VideoArrayContainer>
        {VideoArray.map((video) => {
          return (
            <ThumbnailContainer
              key={video.id}
              onClick={() => {
                openModal(video.filename);
              }}
            >
              <IconWrapper modalIsOpen={modalIsOpen}>{circleIcon}</IconWrapper>
              <ThumbnailWrapper>
                <VideoThumbnail
                  videoUrl={`video.filename`}
                  snapshotAtTime={4}
                />
              </ThumbnailWrapper>
            </ThumbnailContainer>
          );
        })}
      </VideoArrayContainer>

      <ModalContainer>
        <StyledModal isOpen={modalIsOpen} onRequestClose={toggleModal}>
          <VideoWrapper>
            <VideoPlayer
              className="react-player fixed-bottom"
              controls={true}
              playIcon
              url={modalVideo}
              width="100%"
              height="100%"
            />
          </VideoWrapper>
        </StyledModal>
      </ModalContainer>
    </VideoCatalogueContainer>
  );
};

export default VideoCatalogue;
