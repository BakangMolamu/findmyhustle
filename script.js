async function generatePoster(){
  const prompt = document.getElementById('promptInput').value.trim();
  const preview = document.getElementById('posterContainer');
  const previewMessage = document.getElementById('previewMessage');

  if(!prompt){
    alert('Type a description for your poster.');
    return;
  }

  previewMessage.innerText = '⏳ Generating poster preview...';
  preview.innerHTML = '';

  try{
    const response = await fetch("https://YOUR-RENDER-URL/api/generate-image", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({prompt})
    });

    const data = await response.json();
    const img = document.createElement('img');
    img.src = data.url;
    preview.appendChild(img);
    img.onload = () => previewMessage.innerText = '✅ Preview ready — add text overlays!';
  } catch(err){
    console.error(err);
    previewMessage.innerText = '❌ Error generating poster. Try again.';
  }
}
