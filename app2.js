            document.querySelector('#fullscreen').addEventListener('click', () => {
                const frame = document.querySelector('#loadframe');

                if (frame.requestFullscreen) frame.requestFullscreen();
                else if (frame.webkitRequestFullscreen) frame.webkitRequestFullscreen();
                else if (frame.mozRequestFullScreen) frame.mozRequestFullScreen();
                else if (frame.msRequestFullscreen) frame.msRequestFullscreen();
            });

            window.addEventListener('fullscreenchange', () => {
                if (document.fullscreenElement) document.querySelector('#loadframe').style.borderRadius = '0px';
                else document.querySelector('#loadframe').style.borderRadius = '';
            });
