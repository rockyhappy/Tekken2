const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const rectangle1 = {
    x: 50,
    y: 50,
    width: 100,
    height: 50,
    color: "blue",
    speedX: 0,
    speedY: 0
};

const rectangle2 = {
    x: 200,
    y: 100,
    width: 100,
    height: 50,
    color: "red",
    speedX: 0,
    speedY: 0
};

function drawRect(rect) {
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
}

function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update rectangle positions
    rectangle1.x += rectangle1.speedX;
    rectangle1.y += rectangle1.speedY;

    rectangle2.x += rectangle2.speedX;
    rectangle2.y += rectangle2.speedY;

    // Prevent rectangles from going outside the canvas boundaries
    // rectangle1.x = Math.max(0, Math.min(rectangle1.x, canvasWidth - rectangle1.width));
    // rectangle1.y = Math.max(0, Math.min(rectangle1.y, canvasHeight - rectangle1.height));

    // rectangle2.x = Math.max(0, Math.min(rectangle2.x, canvasWidth - rectangle2.width));
    // rectangle2.y = Math.max(0, Math.min(rectangle2.y, canvasHeight - rectangle2.height));

    

    // Check for collisions
    if (
        rectangle1.x + rectangle1.width > rectangle2.x &&
        rectangle1.x < rectangle2.x + rectangle2.width &&
        rectangle1.y + rectangle1.height > rectangle2.y &&
        rectangle1.y < rectangle2.y + rectangle2.height
    ) {
        // Handle collision by preventing further movement
        rectangle1.speedX = 0;
        rectangle1.speedY = 0;
        rectangle2.speedX = 0;
        rectangle2.speedY = 0;

        // Adjust positions to avoid overlap
        if (rectangle1.x < rectangle2.x) {
            rectangle1.x = rectangle2.x - rectangle1.width;
        } else {
            rectangle1.x = rectangle2.x + rectangle2.width;
        }
    }

    // Draw rectangles
    drawRect(rectangle1);
    drawRect(rectangle2);

    // Request animation frame
    requestAnimationFrame(update);
}

// Handle keyboard input for rectangle1 (WASD keys)
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "a":
            rectangle1.speedX = -1;
            break;
        case "d":
            rectangle1.speedX = 1;
            break;
        case "w":
            rectangle1.speedY = -1;
            break;
        case "s":
            rectangle1.speedY = 1;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a":
        case "d":
        case "w":
        case "s":
            rectangle1.speedX = 0;
            rectangle1.speedY = 0;
            break;
    }
});

// Handle keyboard input for rectangle2 (Arrow keys)
document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            rectangle2.speedX = -1;
            break;
        case "ArrowRight":
            rectangle2.speedX = 1;
            break;
        case "ArrowUp":
            rectangle2.speedY = -1;
            break;
        case "ArrowDown":
            rectangle2.speedY = 1;
            break;
    }
});

document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
            rectangle2.speedX = 0;
            rectangle2.speedY = 0;
            break;
    }
});

// Start the animation loop
update();
