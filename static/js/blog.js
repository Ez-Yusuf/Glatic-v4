.then((lessgooo) => lessgooo.json())
.then((blog) => {
blog.forEach((item) => {
        const makedivaaaa = document.createElement('div');
        const thediv = document.querySelector('.blog');
        makedivaaaa.className = 'blogdiv';
        makedivaaaa.innerHTML = `<div><h1>${item.date}</h1><h2>${item.title}</h2><p>${item.description}</p></div>`;
        thediv.appendChild(makedivaaaa);
    });
})
.catch((e) => {
  alert(e);
});
