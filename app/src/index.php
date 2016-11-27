<?php
require_once __DIR__.'/../vendor/autoload.php';
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();

$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'    => 'pdo_pgsql',
        'host'      => "172.17.0.2",
        'dbname'    => 'hackaton',
        'user'      => 'postgres',
        'password'  => 'postgres',
        'charset'   => 'utf-8',
    ),
));


$app->post('/v1/salva-usuario', function (Request $request) use ($app) { 

	$content = json_decode($request->getContent());
    $post = $app['db']->insert('usuarios',
        array(
            'nome' => $content->nome,
            'email' => $content->email,
            'senha' => $content->senha
        )
    );

	return '';
});

$app->post('/v1/salva-questoes', function (Request $request) use ($app) {
    $content = json_decode($request->getContent());

    $que_list = [];

    foreach ($content->ids_que as $id_que){
        $post = $app['db']->insert('usuario_questoes', [
            'id_usu' => $content->id_usu,
            'id_que' => $id_que
        ]);
    }

    return '';
});


$app->post('/v1/salva-ocorrencia', function (Request $request) use ($app) { 
    $content = json_decode($request->getContent());

    $app['db']->insert('enderecos',
        array(
            'latitude' => $content->latitude,
            'longitude' => $content->longitude
        )
    );    

    $app['db']->insert('usuario_ocorrencias',
        array(
            'id_usu' => $content->id_usu,
            //'id_end' => $content->id_end,
            'id_end' => $content->id_usu,
            'mensagem' => $content->mensagem
        )
    );

    //pegar automaticamente o id do endereco

    return '';
});


$app->get('/', function() use ($list, $app) {
    return "Hello Word!";
});

$app->get('/v1/notificacao', function() {
	return "notificacao!";
});

$app->get('/v1/area-risco', function() {
	return "area de risco";
});

$app->get('/v1/ocorrencias', function (Request $request) use ($app) { 
    $sql = "select u.id_usu, uo.id_oco, e.latitude, e.longitude from usuario_ocorrencias uo inner join enderecos e on uo.id_end = e.id_end inner join usuarios u on uo.id_usu = u.id_usu;";
    
    $post = $app['db']->fetchAll($sql);
    
    return json_encode($post);
});
 
$app->run();
