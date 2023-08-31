// const requestUrl = 'https://api.github.com/users/akibsaleh';
// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl);
// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(this.responseText);
//     console.log(data.avatar_url);
//   }
// };
// xhr.send();

function injection(avatar, fullName, repoCount) {
  document.getElementById('vein').innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
            <img src="${avatar}" alt="avatar" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${fullName}</h2>
            <p>Total Public Repos: ${repoCount}</p>
        </div>
    </div>
    `;
}

document.getElementById('btn').onclick = (e) => {
  const requestUrl = `https://api.github.com/users/tonmoy1a`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', requestUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      // const { avatar_url, name, public_repos } = data;
      // injection(avatar_url, name, public_repos);
    }
  };
  xhr.send();
};
