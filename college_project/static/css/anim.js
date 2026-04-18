// BusTrack shared background animation — include at bottom of every page
(function() {
  // Starfield
  const canvas = document.getElementById('stars');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = Array.from({length: 160}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        r: Math.random() * 1.3 + 0.25,
        speed: Math.random() * 0.008 + 0.003,
        a: Math.random()
      }));
    }
    function draw(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.a = 0.25 + 0.75 * Math.abs(Math.sin(t * s.speed));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(241,245,249,${s.a})`;
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(draw);
  }

  // Particles
  const pc = document.getElementById('particles');
  if (pc) {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'p';
      const sz = Math.random() * 4 + 1.5;
      p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;` +
        `--dur:${Math.random()*10+7}s;--delay:${Math.random()*10}s;` +
        `background:${Math.random()>0.5?'#3b82f6':'#06b6d4'};`;
      pc.appendChild(p);
    }
  }
})();
