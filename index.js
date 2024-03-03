class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector.slice(1);
    this.targetDate = targetDate;
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="timer" id="${this.selector}">
                <div class="field">
                    <span class="value" data-value="days"></span>
                </div>
                
                <div class="field">
                    <span class="value" data-value="hours"></span>
                </div>
                
                <div class="field">
                    <span class="value" data-value="mins"</span>
                </div>
                
                <div class="field">
                    <span class="value" data-value="secs"></span>
                </div>
           </div>`
    );
    setInterval(() => {
      const time = this.targetDate.getTime() - new Date();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const base = document.getElementById(this.selector);
      base.querySelector('[data-value="days"]').textContent = `${days}:`;
      base.querySelector('[data-value="hours"]').textContent = `${hours}:`;
      base.querySelector('[data-value="mins"]').textContent = `${mins}:`;
      base.querySelector('[data-value="secs"]').textContent = secs;
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});

new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("September 3, 2025"),
});
