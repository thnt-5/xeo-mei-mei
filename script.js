const character = document.getElementById("character");
const characterVideo = document.getElementById("characterVideo");
const countText = document.getElementById("count");
const bestText = document.getElementById("best");
const sound = document.getElementById("sound");
const shareBtn = document.getElementById("shareBtn");

// Lấy dữ liệu cũ
let count = Number(localStorage.getItem("count")) || 0;
let best = Number(localStorage.getItem("best")) || 0;

// Hiển thị ban đầu
countText.innerText = count;
bestText.innerText = best;

// Hàm xử lý click
function handleClick() {
    // 1. Ẩn ảnh, hiện video
    character.style.display = "none";
    characterVideo.style.display = "block";

    // 2. Phát âm thanh
    sound.currentTime = 0;
    sound.play();

    // 3. Reset video về đầu và phát
    characterVideo.currentTime = 0;
    characterVideo.play().catch(err => {
        console.log("Video không tự play:", err);
    });

    // 4. Khi video kết thúc → ẩn video, hiện ảnh lại
    characterVideo.onended = () => {
        characterVideo.style.display = "none";
        character.style.display = "block";
    };

    // 5. Tăng số lần bấm
    count++;
    countText.innerText = count;
    localStorage.setItem("count", count);

    // 6. Cập nhật kỷ lục
    if (count > best) {
        best = count;
        bestText.innerText = best;
        localStorage.setItem("best", best);
    }
}

// Thêm sự kiện click cho cả ảnh và video
character.addEventListener("click", handleClick);
characterVideo.addEventListener("click", handleClick);


