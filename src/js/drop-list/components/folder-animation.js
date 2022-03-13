import anime from 'animejs/lib/anime.es.js';

const TIMELINE_PROPS = { easing: 'easeOutExpo' };
const durationA = 600;
const durationB = durationA;
const durationC = durationA + durationB;
const durationD = durationB;

const setupAnimation = (tl, target, first, { changeBegin = () => {}, direction = 'down' } = {}) => {
    const timeline = tl;

    timeline
        .add(
            {
                targets: target,
                duration: durationC,
                opacity: [0, 1],
            },
            first ? '' : `-=${durationC}`
        )
        .add(
            {
                targets: target,
                duration: durationA,
                translateY: direction === 'up' ? [64, 0] : [0, 64],
                changeBegin,
            },
            `-=${durationD}`
        )
        .add({
            targets: target,
            opacity: 0,
            duration: durationB,
        });
};

class FolderAnimation {
    constructor(selector) {
        this.element = typeof id === 'string' ? document.querySelector(selector) : selector;
        this.tl1 = anime.timeline(TIMELINE_PROPS);
        this.tl2 = anime.timeline(TIMELINE_PROPS);
        this.started = false;
    }

    start() {
        if (!this.element) {
            return;
        }

        if (this.started) {
            this.tl1.restart();
            this.tl2.restart();
            this.tl2.pause();
            return;
        }

        this.started = true;

        const {
            dataset: { folderAnim: direction },
        } = this.element;
        const total = 4;

        for (let i = 1; i <= total; i++) {
            setupAnimation(this.tl1, this.element.querySelector(`#circle-${i}`), i === 1, {
                direction,
                changeBegin:
                    i === total
                        ? () => {
                              this.tl2.play();
                          }
                        : undefined,
            });

            const secondaryIndex = i + total;

            setupAnimation(
                this.tl2,
                this.element.querySelector(`#circle-${secondaryIndex}`),
                secondaryIndex === total + 1,
                {
                    direction,
                    changeBegin:
                        secondaryIndex === total + total
                            ? () => {
                                  this.tl1.play();
                              }
                            : undefined,
                }
            );
        }

        this.tl2.pause();
    }

    stop() {
        this.tl1.pause();
        this.tl2.pause();
    }
}

export default FolderAnimation;
