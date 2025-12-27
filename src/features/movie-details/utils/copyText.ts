export const copyText = async (text?: string) => {
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};
