var xhr = new XMLHttpRequest();

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

function todoSuccessCallback(res) {
    const jsonRes = JSON.parse(res);
    const arrTodos = Array.from(jsonRes);
    const htmlTodos = arrTodos.reduce((prevValue, todo) => prevValue 
        + `<tr>
                <td>${todo.id}</td>
                <td>${todo.title}</td>
                <td>${todo.completed}</td>
            </tr>
            `, '');

    const eleTodos = document.querySelector('#todos');
    eleTodos.innerHTML = htmlTodos;
}

function todoErrorCallback(res) {
    console.error(res);
    const html = `<tr><td colspan="3">${res}</td></tr>`;
    const eleTodos = document.querySelector('#todos');
    eleTodos.innerHTML = html;
}

function getTodos(userId) {
    const param = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/users/1/todos?userId=${userId}`,
        successCallback: todoSuccessCallback,
        errorCallback: todoErrorCallback
    };
    
    executeAjax(param);
}

window.onload = () => {
    const eleUserId = document.querySelector('#userId');
    eleUserId.addEventListener('keyup', (e) => {
        if(e.keyCode===13) {
            getTodos(eleUserId.value);
        }
    });
};