// Get all data from the endpoint
function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function(response){
        resultElement.innerHTML= generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

// The presentation of the data that will shows in the frontend when request succeess
function generateSuccessHTMLOutput(response) {
    return '<h4>Result:</h4>' +
           '<h5>Status:</h5>' +
           '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
           '<h5>Headers:</h5>' +
           '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
           '<h5>Data:</h5>' +
           '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';

}

// The presentation of the error that will shows in the frontend when request fail
function generateErrorHTMLOutput(error) {
    return '<h4>Result:</h4>' +
           '<h5>Message:</h5>' +
           '<pre>' + error.message + '</pre>' +
           '<h5>Status:</h5>' +   
           '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
           '<h5>Headers:</h5>' +
           '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
           '<h5>Data:</h5>' +
           '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

// Get one object from the endpoint based on the id number that user request
function performGetRequest2(){
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';

    // sent the id to the endpoint to get its data
    axios.get('https://jsonplaceholder.typicode.com/todos' , {
        params: {
            id: todoId
        }
    })
    .then(function(response){
        resultElement.innerHTML= generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
}

// Run performPostRequest function when the form submit
document.getElementById('todoInputForm').addEventListener('submit' , performPostRequest);

// post data to the endpoint and show the result
function performPostRequest (e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';

    axios.post('https://jsonplaceholder.typicode.com/todos' , {
        userId: '1',
        title: todoTitle,
        completed: false
    })
    .then(function(response){
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function(error){
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    })
    e.preventDefault();
}

// clear all generated data
function clearOutput() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('getResult2');
    resultElement.innerHTML = '';
    var resultElement = document.getElementById('postResult');
    resultElement.innerHTML = '';

}