module.exports = function (io) {
    io.sockets.on('connection', function (client) {

        client.emit('hello', { title: 'Bem Vindo', msg: 'Você esta conectado' });


        client.on('user_add', function (data) {
            client.broadcast.emit('user_add_response', {
                title: 'Novo funcionário',
                msg: 'O funcionário ' + data.nome + ' foi adicionado'
            });
        });

        client.on('user_remove', function (data) {
            client.broadcast.emit('user_remove_response', {
                title: 'Funcionário removido',
                msg: 'O funcionário ' + data.nome + ' foi removido'
            });
        });


    });
}
