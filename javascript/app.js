var customApi='http://localhost:8000/v1/rate';
function send(data)
{
    // console.log(data);
    var options={
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
          }),
    };
    fetch(customApi,options).then(function(response){
        alert('gửi thành công');
        response.json();
    })
}