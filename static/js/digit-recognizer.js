// import { MnistData } from './digit-data.js';

const checkWidthDigit = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
        document.querySelector('#digit-recognizer .arrow').textContent = 'arrow_downward';
    } else {
        document.querySelector('#digit-recognizer .arrow').textContent = 'arrow_right_alt';
    }
}

window.addEventListener('load', checkWidthDigit);

window.addEventListener('resize', checkWidthDigit);

let canvas = document.querySelector('#digit-recognizer canvas');
let context = canvas.getContext('2d');

let pixelMap = Array(28).fill().map(() => Array(28).fill(0));

let pixelsToFill = [
    [0, 0, 0.75],
    [1, 0, 0.25],
    [-1, 0, 0.25],
    [0, 1, 0.25],
    [0, -1, 0.25]
];

let fillStyleMap = {
    0: '#000',
    0.25: '#444',
    0.5: '#888',
    0.75: '#CCC',
    1: '#FFF'
}

function fillPixel(x, y) {
    let pixels = pixelsToFill.map((e) => {
        return [x + e[0], y + e[1], e[2]];
    });

    for (let pixel of pixels) {
        let [i, j, a] = pixel;
        
        if (i < 0 || i > 27 || j < 0 || j > 27) {
            continue;
        }

        let pixelX = i * 10;
        let pixelY = j * 10;

        pixelMap[j][i] += a;

        if (pixelMap[j][i] >= 1) {
            pixelMap[j][i] = 1;
        }

        context.fillStyle = fillStyleMap[pixelMap[j][i]];
        context.fillRect(pixelX, pixelY, 10, 10);
    }
}

let mouseIsDown;

canvas.addEventListener('mousedown', () => {
    pixelMap = Array(28).fill().map(() => Array(28).fill(0));
    canvas.width = canvas.width;

    mouseIsDown = true;
});

canvas.addEventListener('touchstart', () => {
    pixelMap = Array(28).fill().map(() => Array(28).fill(0));
    canvas.width = canvas.width;

    mouseIsDown = true;
});

canvas.addEventListener('mouseup', () => {
    mouseIsDown = false;

    let prediction = model.predict(tf.tensor([pixelMap.map(e => {
        return e.map(i => {
            return [i];
        });
    })])).dataSync();
    let number = prediction.indexOf(Math.max(...prediction))
    document.querySelector('#digit-recognizer .result').textContent = number;
});

canvas.addEventListener('touchend', () => {
    mouseIsDown = false;

    let prediction = model.predict(tf.tensor([pixelMap.map(e => {
        return e.map(i => {
            return [i];
        });
    })])).dataSync();
    let number = prediction.indexOf(Math.max(...prediction))
    document.querySelector('#digit-recognizer .result').textContent = number;
});

canvas.addEventListener('mouseleave', () => {
    mouseIsDown = false;
});

canvas.addEventListener('touchcancel', () => {
    mouseIsDown = false;
});

canvas.addEventListener('mousemove', (e) => {
    if (mouseIsDown) {
        let canvasRect = canvas.getBoundingClientRect();
        context.fillStyle = "#FFFFFF";

        let i = Math.floor((e.clientX - canvasRect.left) / 10);
        let j = Math.floor((e.clientY - canvasRect.top) / 10);

        fillPixel(i, j);
    }
});

canvas.addEventListener('touchmove', (e) => {
    if (mouseIsDown) {
        let canvasRect = canvas.getBoundingClientRect();
        context.fillStyle = "#FFFFFF";  

        let i = Math.floor((e.touches[0].clientX - canvasRect.left) / 10);
        let j = Math.floor((e.touches[0].clientY - canvasRect.top) / 10);

        fillPixel(i, j);
    }
});
let model;

tf.loadLayersModel('static/model/model.json').then(loaded => {
    model = loaded;
});

// let model = tf.sequential();

// model.add(tf.layers.conv2d({
//     inputShape: [28, 28, 1],
//     kernelSize: 5,
//     filters: 8,
//     strides: 1,
//     activation: 'relu',
//     kernelInitializer: 'varianceScaling'
// }));

// model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));

// model.add(tf.layers.conv2d({
//     kernelSize: 5,
//     filters: 16,
//     strides: 1,
//     activation: 'relu',
//     kernelInitializer: 'varianceScaling'
// }));

// model.add(tf.layers.maxPooling2d({poolSize: [2, 2], strides: [2, 2]}));

// model.add(tf.layers.flatten());

// model.add(tf.layers.dense({
//     units: 10,
//     kernelInitializer: 'varianceScaling',
//     activation: 'softmax'
//   }));

// model.compile({
//     optimizer: 'adam',
//     loss: 'categoricalCrossentropy',
//     metrics: ['accuracy']
// });

// const train = async () => {
//     let data = new MnistData();
//     await data.load();

//     const [trainXs, trainYs] = tf.tidy(() => {
//         const d = data.nextTrainBatch(52000);
//         return [    
//             d.xs.reshape([52000, 28, 28, 1]),
//             d.labels
//         ];
//     });
    
//     const [testXs, testYs] = tf.tidy(() => {
//         const d = data.nextTestBatch(13000);
//         return [
//             d.xs.reshape([13000, 28, 28, 1]),
//             d.labels
//         ];
//     });

//     model.fit(trainXs, trainYs, {
//         epochs: 50,
//         batchSize: 512,
//         shuffle: true,
//         validationData: [testXs, testYs],
//         callbacks: {
//             onBatchEnd: (batch, logs) => {
//                 console.log('Precisão: ', logs.acc);
//             }
//         }
//     }).then(info => {
//         console.log('Precisão final: ', info.history.acc);
//         alert('Precisão final: ' + info.history.acc);
//     });
// }

// train();
