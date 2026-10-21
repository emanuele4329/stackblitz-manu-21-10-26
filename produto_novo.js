fetch('http://localhost:3000/produtos/3', { method: 'DELETE' })
.then(resposta => console.log('status:', resposta.status));
