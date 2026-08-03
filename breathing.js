document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const historyBtn = document.getElementById('historyBtn');
    const circleContainer = document.querySelector('.circle-container');
    const actionText = document.getElementById('actionText');
    const mainTitle = document.getElementById('mainTitle');

    let isBreathing = false;
    let timeoutIds = [];

    function clearAllTimeouts() {
        timeoutIds.forEach(id => clearTimeout(id));
        timeoutIds = [];
    }

    function runBreathCycle() {
        if (!isBreathing) return;

        // 1. Inhale (4 seconds) - Circle expands
        circleContainer.className = 'circle-container grow';
        actionText.textContent = 'Breathe in...';

        timeoutIds.push(setTimeout(() => {
            if (!isBreathing) return;

            // 2. Hold (4 seconds) - Circle completely freezes at max size
            circleContainer.className = 'circle-container hold-grow';
            actionText.textContent = 'Hold...';

            timeoutIds.push(setTimeout(() => {
                if (!isBreathing) return;

                // 3. Exhale (6 seconds) - Circle shrinks back down
                circleContainer.className = 'circle-container shrink';
                actionText.textContent = 'Exhale...';

                timeoutIds.push(setTimeout(() => {
                    if (!isBreathing) return;

                    // 4. Hold (4 seconds) - Circle freezes at minimum size
                    circleContainer.className = 'circle-container hold-shrink';
                    actionText.textContent = 'Hold...';

                    timeoutIds.push(setTimeout(() => {
                        if (isBreathing) {
                            // Trial finished! Update title and change button to "Breathe Again"
                            isBreathing = false;
                            mainTitle.textContent = 'Good Job youve done it';
                            actionText.textContent = 'Done';
                            startBtn.textContent = 'Breathe Again';
                        }
                    }, 4000));

                }, 6000));

            }, 4000));

        }, 4000));
    }

    startBtn.addEventListener('click', () => {
        if (!isBreathing) {
            isBreathing = true;
            mainTitle.textContent = 'Lets Relax'; // Reset header text on start
            startBtn.textContent = 'Stop';
            runBreathCycle();
        } else {
            isBreathing = false;
            clearAllTimeouts();
            circleContainer.className = 'circle-container';
            actionText.textContent = 'Ready...';
            startBtn.textContent = 'Start';
        }
    });

    historyBtn.addEventListener('click', () => {
        window.location.href = 'preview.html';
    });
});