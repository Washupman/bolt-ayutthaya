/* Show a time-limited offer only while its registration window is open.
   Cutoff: 15 Oct 2026 at 00:00 in Thailand (UTC+07:00) = 14 Oct 2026 17:00 UTC.
   The permanent referral guide remains available after expiry.
   No cookies, storage, analytics, or network requests. */
(() => {
  const campaign = document.getElementById('referral-promo');
  if (!campaign) return;
  const expiry = Date.parse(campaign.dataset.expiresUtc || '');
  if (!Number.isFinite(expiry)) return;
  campaign.hidden = Date.now() >= expiry;
})();
