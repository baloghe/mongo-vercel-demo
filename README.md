# Vercel - MongoDB - React App

A quick demonstration of how to retrieve and play back audio from MongoDB.

A short conversation is taken from "Özel Ders" ("Private Lesson", Netflix, 2022) and stored in MP3 format in MongoDB GridFS.
The conversation in original along with its English translation is shown to the user sentence by sentence.
User can play the respective part of the audio as well.

## Vercel
Deployed to Vercel: [https://mongo-vercel-demo-two.vercel.app/](https://mongo-vercel-demo-two.vercel.app/)

## Subtitles
For now the text is stored as a static variable in `index.js`, since only one excerpt is scripted.
Each sentence consists of a Turkish and an English version. Its respective `start` and `end` position in the underlying audio is also provided.

## MP3 in MongoDB
The audio track (1.3 MB, a bit over a minute) is uploaded to MongoDB GridFS by `mongofiles` (part of MongoDb database Command Line Tools, available in MongoDb's download center).

## Vercel API
A Vercel API `/api/mp3` retrieves the audio file from MongoDB and dispatches it as a raw byte stream.

## React Frontend
Upon loading, a `useEffect()` and an `Axios` post call takes care of downloading the audio from MongoDB and storing it in a Blob object with a `URL.createObjectURL()` pointing to it.
The URL gets fed into the source of a hidden static `<audio>` tag.
When User pushes the megaphone button, the `<audio>` tag's `currentTime` is positioned to the actual sentence's `start` and the audio gets played.
A `setInterval` takes care of pausing the playback after `start - end` millisecs.
