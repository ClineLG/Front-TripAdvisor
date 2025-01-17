document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded 🥹");

  const buttonContact = document.querySelector(".connect");
  buttonContact.addEventListener("click", () => {
    console.log("cliqué");
    document.querySelector(".modal").classList.add("hide");

    const closeForm = document.querySelector(".close");
    closeForm.addEventListener("click", () => {
      console.log("cliqué");
      document.querySelector(".modal").classList.remove("hide");
    });
    document.querySelector(".submit").addEventListener("click", () => {
      document.querySelector(".modal").classList.remove("hide");
    });
  });
  document.querySelector(".submit").addEventListener("click", () => {
    document
      .querySelector("#a-awesome-form")
      .addEventListener("submit", async (e) => {
        try {
          const data = {
            firstname: document.querySelector("#firstname").value,
            lastname: document.querySelector("#lastname").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value,
          };
          if (!data.email) {
            document.querySelector(".modal").classList.remove("hide");
          } else {
            if (data.email) console.log(data);
            const response = await axios.post(
              "https://site--formtripadvisor--phx29rm2mv76.code.run/form",
              data
            );
            console.log(response);
          }
        } catch (error) {
          console.log(error);
        }
      });
  });

  window.addEventListener("scroll", () => {
    document.querySelector("header").classList.add("scrollHide");
    if (window.scrollY === 0) {
      document.querySelector("header").classList.remove("scrollHide");
    }
  });

  document.querySelector(".magic").addEventListener("click", () => {
    document.querySelector(".magic").classList.toggle("img");
  });
});
