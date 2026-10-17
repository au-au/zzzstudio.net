const status = document.getElementById('copy-status');
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const handle = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(handle);
      status.textContent = `Copied ${handle}. Search for it in ${handle.endsWith('_official') ? 'WeChat' : 'Weibo'}.`;
    } catch {
      status.textContent = `Copy this account name and search in ${handle.endsWith('_official') ? 'WeChat' : 'Weibo'}: ${handle}`;
    }
  });
});
