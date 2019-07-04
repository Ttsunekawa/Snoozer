 export const typeWriterholder = () => {
    let i = 0;
    const email = 'jimmyg@49ers.com'; /* The text */
    const speed = 50; /* The speed/duration of the effect in milliseconds */
    let email_field = document.getElementById("input-email")

    const typeWriter = () => {
      if (i < email.length) {
        email_field.value += email.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();
    typeWriterholder2();
  };

  export const typeWriterholder2 = () => {
    let i = 0;
    const password = 'football'
    const speed = 50; /* The speed/duration of the effect in milliseconds */
    let password_field = document.getElementById("input-password")

    const typeWriter2 = () => {
      if (i < password.length) {
        password_field.value += password.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter2();
  };