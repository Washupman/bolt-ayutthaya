/* Time-limited Bolt referral announcement and accessible in-page terms.
   Campaign ends 15 Oct 2026, 00:00 Thailand time (2026-10-14T17:00Z).
   No cookies, analytics, storage, or data collection. */
(() => {
  const campaign = document.getElementById('referral-promo');
  const dialog = document.getElementById('referral-terms-dialog');
  if (!campaign) return;
  const expiresAt = Date.parse(campaign.dataset.expiresUtc || '');
  if (!Number.isFinite(expiresAt)) return; // fail closed: campaign starts hidden

  let opener = null;
  if (dialog && typeof dialog.showModal === 'function') {
    campaign.querySelectorAll('[data-terms-open]').forEach((button) => {
      button.addEventListener('click', () => {
        if (Date.now() >= expiresAt || dialog.open) return;
        opener = button;
        dialog.showModal();
        dialog.querySelector('[data-terms-close]')?.focus();
      });
    });
    dialog.querySelectorAll('[data-terms-close]').forEach((button) => {
      button.addEventListener('click', () => dialog.close());
    });
    // The dialog also closes with Escape (native) and clicking outside the content.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (opener?.isConnected && !campaign.hidden) opener.focus();
      opener = null;
    });
  }

  const refresh = () => {
    const current = Date.now() < expiresAt;
    campaign.hidden = !current;
    if (!current) {
      if (dialog?.open) dialog.close();
      clearInterval(watch);
    }
  };
  const watch = setInterval(refresh, 10_000);
  refresh();
})();
