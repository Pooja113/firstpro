import React, { useEffect, useRef } from 'react'
import { VideoContainer, VideoStream } from 'styles/components/VideoRecord'
import { ReactMediaRecorder } from 'react-media-recorder'

const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  if (!stream) {
    return null
  }

  return <VideoStream ref={videoRef} autoPlay />
}

const VideoRecord = () => (
  <VideoContainer>
    <ReactMediaRecorder
      video
      render={({ startRecording, stopRecording, previewStream }) => {
        return (
          <>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <VideoPreview stream={previewStream} />
          </>
        )
      }}
    />
  </VideoContainer>
)

export default VideoRecord
