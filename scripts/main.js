//Resumo Expandido -------------------

const parentContainer = document.querySelector(".read-more-container");

parentContainer.addEventListener("click", (event) => {
  const current = event.target;
  const readMoreBtn = current.className.includes("read-more-btn");

  if (!readMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".read-more-text");
  currentText.classList.toggle("read-more-text--show");
  current.textContent = current.textContent.includes("veja mais")
    ? "veja menos"
    : "veja mais";
});

//Criar tópico -------------------

document.querySelector("#btn1").addEventListener("click", () => {
  document.querySelector(".box-content").style.display = "none";

  const form = document.querySelector(".form-content");
  form.classList.toggle("form-content--show");
});

//Tópico Enviado -------------------

document.querySelector("#topic-btn").addEventListener("click", () => {
  document.querySelector(".form-content").style.display = "none";
  const sendTopic = document.querySelector(".send-topic");
  sendTopic.classList.toggle("send-topic--show");

  //Inserindo o conteúdo no bloco

  const input = document.querySelector("#definir-topico");
  const textArea = document.querySelector("#msg");
  const inputContent = input.value;
  const txtAreaContent = textArea.value;

  const h3 = document.createElement("h3");
  const pName = document.createElement("p");
  const p2 = document.createElement("p");

  p2.setAttribute("id", "comment");
  pName.innerHTML = "Carlos Henrique Santos";
  h3.innerHTML = inputContent;
  p2.innerHTML = txtAreaContent;

  const divContent = document.querySelector(".flex-box-content");
  const divTopic = document.createElement("div");
  const divQuestions = document.createElement("div");
  divTopic.setAttribute("class", "topic-box");
  divQuestions.setAttribute("class", "questions");
  divQuestions.appendChild(h3);
  divQuestions.appendChild(pName);
  divQuestions.appendChild(p2);

  divTopic.appendChild(divQuestions);
  divContent.appendChild(divTopic);

  const divOption = document.createElement("div");
  const a = document.createElement("a");
  const btn = document.createElement("button");
  const firstIcon = document.createElement("img");
  const secondIcon = document.createElement("img");
  const pLike = document.createElement("p");
  const pAnswer = document.createElement("p");

  divOption.setAttribute("class", "topic-flex");
  pAnswer.setAttribute("id", "topic-answers");
  pLike.innerHTML = "1 Like";
  pAnswer.innerHTML = "1 Resposta";
  firstIcon.src = "./imagens/mais informações.png";
  secondIcon.src = "./imagens/green apples 22.png";

  a.appendChild(firstIcon);
  btn.appendChild(secondIcon);

  divOption.appendChild(a);
  divOption.appendChild(btn);
  divOption.appendChild(pLike);
  divOption.appendChild(pAnswer);

  divTopic.appendChild(divOption);
});

//botão "criar novo tópico"
document.querySelector("#new-topic-btn").addEventListener("click", () => {
  const sendTopic = document.querySelector(".send-topic");
  sendTopic.classList.toggle("send-topic--show");
  document.querySelector(".form-content").style.display = "flex";
});

//Mostrar Respostas -------------------

document.querySelectorAll(".topic-flex").forEach((item) => {
  document.querySelector(".topic-answers").addEventListener("click", (e) => {
    console.log(e.target);
    const commentBox = document.querySelector(".comment-box");
    commentBox.classList.toggle("comment-box--show");
  });
});

//Menu responsivo -------------------

const ul = document.querySelector("ul");
const menuIcon = document.querySelector("#bars").addEventListener("click", () => {
    ul.classList.toggle("ul-responsive--show");
});
