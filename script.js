fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(smileData => {
        const smileText = smileData.attachments[0].text;
        const smiles = document.getElementById('smiles');

        smiles.innerHTML = smileText;
    })

$('.txt').html(function (i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
});
