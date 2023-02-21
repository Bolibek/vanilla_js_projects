var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var video2 = document.querySelector(".player");
var canvas2 = document.querySelector(".photo");
var ctx2 = canvas2.getContext("2d");
var strip = document.querySelector(".strip");
var snap = document.querySelector(".snap");
function getVideo() {
    return __awaiter(this, void 0, void 0, function () {
        var localMediaStream;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, navigator.mediaDevices.getUserMedia({
                        video: true,
                    })];
                case 1:
                    localMediaStream = _a.sent();
                    video2.srcObject = localMediaStream;
                    video2.play();
                    return [2 /*return*/];
            }
        });
    });
}
function paintToCanvas() {
    var width = video2.videoWidth;
    var height = video2.videoHeight;
    canvas2.width = width;
    canvas2.height = height;
    return setInterval(function () {
        ctx2.drawImage(video2, 0, 0, width, height);
        var pixels = ctx2.getImageData(0, 0, width, height);
        pixels = redEffect(pixels);
        pixels = rgbSplit(pixels);
        ctx2.globalAlpha = 0.9;
        // pixels = greenScreen(pixels);
        ctx2.putImageData(pixels, 0, 0);
    }, 16);
}
function takePhoto() {
    snap.currentTime = 0;
    snap.play();
    var data = canvas2.toDataURL("image/jpeg");
    var link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "handsome");
    link.innerHTML = "<img src=\"".concat(data, "\" alt=\"Handsome Man\" />");
    strip.insertBefore(link, strip.firstChild);
}
function redEffect(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}
function rgbSplit(pixels) {
    for (var i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0]; // RED
        pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 150] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}
function greenScreen(pixels) {
    var levels = {};
    document.querySelectorAll(".rgb input").forEach(function (input) {
        levels[input.name] = input.value;
    });
    for (var i = 0; i < pixels.data.length; i = i + 4) {
        var red = pixels.data[i + 0];
        var green = pixels.data[i + 1];
        var blue = pixels.data[i + 2];
        var alpha = pixels.data[i + 3];
        if (red >= levels.rmin &&
            green >= levels.gmin &&
            blue >= levels.bmin &&
            red <= levels.rmax &&
            green <= levels.gmax &&
            blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}
getVideo();
video2.addEventListener("canplay", paintToCanvas);
//# sourceMappingURL=webcam.js.map