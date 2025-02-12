const CopyEmail = () => {
  const emailText = document.querySelector('.footer__email').innerText;
  navigator.clipboard.writeText(emailText);
  document.querySelector('.footer__email-instruction').innerText = 'copied 💫';
  setTimeout(
    () =>
      (document.querySelector('.footer__email-instruction').innerText =
        'click email to copy'),
    1500
  );
};

document.querySelector('.footer__email').addEventListener('click', CopyEmail);
