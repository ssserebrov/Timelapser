var dir = require('node-dir')
var ffmpeg = require('fluent-ffmpeg');

//var images = [
//    'img1.jpg',
//    'img2.jpg',
//    'img3.jpg',
//    'img4.jpg',
//    'img4.jpg',
//    'img5.jpg',
//    'img6.jpg',
//    'img7.jpg',
//    'img8.jpg',
//    'img9.jpg',
//    'img10.jpg',
//    'img11.jpg',
//    'img12.jpg',
//    'img13.jpg',
//    'img14.jpg',
//    'img15.jpg',
//    'img16.jpg',
//    'img17.jpg',
//    'img18.jpg',
//    'img19.jpg',
//    'img20.jpg',
//    'img21.jpg',
//    'img22.jpg',
//    'img23.jpg',
//    'img24.jpg',
//    'img25.jpg'
//]


var images = [
    'img1.jpg'
]







ffmpeg()
    .addInput('source/IMG_%d.jpg')
    .videoCodec('libx264')
    .audioCodec('libmp3lame')
    .size('20%')
    .on('error', function (err) {
        console.log('An error occurred: ' + err.message);
    })
    .on('end', function () {
        console.log('Processing finished !');
    })
    .on('progress', function (progress) {
        console.log('Processing: ' + progress.percent + '% done');
    })
    .save('avideo.mp4');










//var videoOptions = {
//    fps: 25,
//    loop: 0.1, // seconds
//    transition: false,
//    videoBitrate: 1024,
//    videoCodec: 'libx264',
//    size: '1920x?',
//    format: 'mp4',
//    pixelFormat: 'yuv420p',
//}

//images = dir.files("source", { sync: true });
//console.log(images);

//videoshow(images, videoOptions)
//    .save('video.mp4')
//    .on('start', function (command) {
//        console.log('ffmpeg process started:', command)
//    })
//    .on('error', function (err, stdout, stderr) {
//        console.error('Error:', err)
//        console.error('ffmpeg stderr:', stderr)
//    })
//    .on('end', function (output) {
//        console.error('Video created in:', output)
//    })

//ffmpeg process started: ffmpeg -i C:\Users\ASEREB~1\AppData\Local\Temp\videoshow-9bccb048-d407-438f-9590-6761c1cdb869 -y -filter_complex concat=n=1:v=1:a=0 video.mp4
//ffmpeg process started: ffmpeg -i C:\Users\ASEREB~1\AppData\Local\Temp\videoshow-d1dc0c3a-5787-42ca-bf77-f041baddb4a8 -y -r 25 -b:v 1024k -vcodec libx264 -filter:v scale=w=1920:h=trunc(ow/a/2)*2 -f mp4 -pix_fmt yuv420p video.mp4
//