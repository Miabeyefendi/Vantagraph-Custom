const { connect, sleep } = require("./qa-lib");
(async () => {
  const c = await connect(); const { ev, go, pause } = c; c.park(); await pause();
  const read = `(() => { const col = (b) => { const s = b && b.querySelector('svg'); return s ? getComputedStyle(s).color : null; };
    const rows = [...document.querySelectorAll('#main-view [role="row"] button[aria-checked]')]; const liked = rows.find(b => b.getAttribute('aria-checked') === 'true'), un = rows.find(b => b.getAttribute('aria-checked') === 'false');
    const h = getComputedStyle(document.documentElement).getPropertyValue('--spice-heart').trim(); return { heart: h, liked: col(liked), unliked: col(un), likedLabel: liked && liked.getAttribute('aria-label'), unlikedLabel: un && un.getAttribute('aria-label') }; })()`;
  const hex2rgb = (h) => { h = h.replace("#", ""); return `rgb(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)})`; };
  await go("/album/2IUf8KXyLYP2q9TAhnZ4T4", 4200); const a = await ev(read);
  await go("/album/5D2CHiTlb8MXWJsZWXjkZf", 4200); const b = await ev(read);
  const want = hex2rgb(a.heart);
  console.log("heart var:", a.heart, "| liked row:", a.liked, "(" + a.likedLabel + ")", a.liked === want ? "OK red" : "NOT heart colour");
  console.log("unliked row:", b.unliked, "(" + b.unlikedLabel + ")", b.unliked !== want ? "plain OK" : "WRONG");
  c.unpark(); c.ws.close();
})();
