function onChange() {
    const password = document.querySelector('[name=password]');
    const confirm = document.querySelector('[name=re-password]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
  }