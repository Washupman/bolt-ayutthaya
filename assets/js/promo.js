/* A time-limited referral offer. Cutoff is 15 Oct 2026, 00:00
   Thailand time (UTC+07:00), equivalent to 14 Oct 2026 17:00 UTC.
   No analytics, cookies, storage or network calls. */
(() => {
  const campaign = document.getElementById('referral-promo');
  if (!campaign) return;
  const expiry = Date.parse(campaign.dataset.expiresUtc || '');
  // Fail closed rather than show a possibly expired offer.
  if (!Number.isFinite(expiry)) return;
  const updateVisibility = () => {
    const active = Date.now() < expiry;
    campaign.hidden = !active;
    if (!active) clearInterval(interval);
  };
  // Check immediately and again while an open page crosses the deadline.
  const interval = setInterval(updateVisibility, 10_000);
  updateVisibility();
})();
