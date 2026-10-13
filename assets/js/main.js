// Optional local-only take-home calculator; no analytics, cookies or network calls.
(() => {
  const form = document.querySelector('#earnings-calculator');
  if (!form) return;
  const output = document.querySelector('#net-result');
  const format = new Intl.NumberFormat('th-TH', {style: 'currency',currency: 'THB',maximumFractionDigits: 2});
  function update() {
    const read = (id) => Math.max(0, Number(form.elements.namedItem(id)?.value) || 0);
    const gross = read('gross');
    const fees = read('fees');
    const fuel = read('fuel');
    const upkeep = read('upkeep');
    output.textContent = format.format(gross - fees - fuel - upkeep);
  }
  form.addEventListener('input', update);
  update();
})();