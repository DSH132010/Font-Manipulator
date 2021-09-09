const p = document.getElementById('p');

noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(100, 150)
    canvas = createCanvas(900, 550);
    canvas.position(520, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Loaded ! 🍕🍔🍟🌭🌭🍿🧂🥓🥚😶🙂😎');
}

function draw() {
    background('#FFF');
    textSize(difference / 3);
    fill('#7B61FF');
    text('Lunar', 300, 300);
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
        difference2 = difference / 3;
        difference3 = floor(difference2)
        p.innerHTML = 'Font Size = ' + difference3 + 'px'
    }
}
