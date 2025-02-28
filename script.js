let timer;
        let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
        let running = false;

        function startStopwatch() {
            if (!running) {
                running = true;
                timer = setInterval(updateTime, 10);
            }
        }

        function stopStopwatch() {
            running = false;
            clearInterval(timer);
        }

        function resetStopwatch() {
            stopStopwatch();
            milliseconds = seconds = minutes = hours = 0;
            document.querySelector(".stopwatch").textContent = "00:00:00.000";
            document.querySelector(".laps").innerHTML = "";
        }

        function updateTime() {
            milliseconds += 10;
            if (milliseconds == 1000) { milliseconds = 0; seconds++; }
            if (seconds == 60) { seconds = 0; minutes++; }
            if (minutes == 60) { minutes = 0; hours++; }
            document.querySelector(".stopwatch").textContent = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
        }

        function lapTime() {
            let lap = document.createElement("p");
            lap.textContent = document.querySelector(".stopwatch").textContent;
            document.querySelector(".laps").appendChild(lap);
        }