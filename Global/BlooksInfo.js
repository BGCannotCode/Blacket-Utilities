blacket.requests.get("/worker/packs", (data) => {
  blacket.packs = data.packs;
  blacket.packBlooks = [];
  Object.keys(blacket.packs).forEach(pack => {
    Object.entries(blacket.packs[pack].blooks).forEach((blook) => blacket.packBlooks.push(blook[1]));
  })

  console.log('%cObtained:', 'font-size: 18px; font-weight: bold;');
  let obtainedStr = '';
  blacket.packBlooks.forEach(a => {
    if (Object.keys(blacket.user.blooks).includes(a)) obtainedStr += a + '\n';
  })
  console.log(obtainedStr);

  console.log('%cMissing:', 'font-size: 18px; font-weight: bold;');
  let missingStr = '';
  blacket.packBlooks.forEach(a => {
    if (!Object.keys(blacket.user.blooks).includes(a)) missingStr += a + '\n';
  })
  console.log(missingStr);
})
