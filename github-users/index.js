const xhr = new XMLHttpRequest();

function ajaxSetCallback({successCallback, errorCallback}) {
    xhr.onreadystatechange = () => {
        if(xhr.readyState === xhr.DONE) {
            const isOK = xhr.status===200 || xhr.status===201 || false;
            if(isOK) {
                successCallback(xhr.response);
            } else {
                errorCallback(xhr.response);
            }
        }
    };
}

function executeAjax({method, url, successCallback, errorCallback}) {
    ajaxSetCallback({
        successCallback: successCallback,
        errorCallback: errorCallback
    });
    xhr.open(method, url);
    xhr.send();
}

function userSuccessCallback(res) {
    const jsonRes = JSON.parse(res);
    const htmlUsers = `<tr>
                <td>${jsonRes.id}</td>
                <td>${jsonRes.login}</td>
                <td>${jsonRes.name}</td>
                <td><img src="${jsonRes.avatar_url}" /></td>
                <td>${jsonRes.bio}</td>
            </tr>
            `;

    const eleUsers = document.querySelector('#users');
    eleUsers.innerHTML = htmlUsers;
}

function userErrorCallback(res) {
    console.error(res);
    const html = `<tr><td colspan="3">${res}</td></tr>`;
    const eleTodos = document.querySelector('#todos');
    eleTodos.innerHTML = html;
}

function getUserInfo(username) {
    const param = {
        method: 'GET',
        url: `https://api.github.com/users/${username}`,
        successCallback: userSuccessCallback,
        errorCallback: userErrorCallback
    };
    
    executeAjax(param);
}

window.onload = () => {
    const eleUsername = document.querySelector('#username');
    eleUsername.addEventListener('keyup', (e) => {
        if(e.keyCode===13) {
            getUserInfo(eleUsername.value);
        }
    });
};