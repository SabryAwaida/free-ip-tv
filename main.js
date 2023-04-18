function copyText() {
    const copyText = document.querySelector("#copy-me");
    const textArea = document.createElement("textarea");
    textArea.value = copyText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    alert("تم نسخ الرابط بنجاح");
  }
 