create table usuarios (
	id_usu serial primary key,
	nome varchar(50),
	senha varchar(50),
	email varchar(50),
	data date default CURRENT_DATE
);

create table enderecos (
	id_end serial primary key,
	latitude float,
	longitude float
);

create table usuario_ocorrencias (
	id_oco serial primary key,
	id_usu int,
	id_end int,
	mensagem varchar(400),
	data date default CURRENT_DATE
);


create table questoes (
	id_que serial primary key,
	questao varchar(400)
);

create table usuario_questoes (
	id_uel serial primary key,
	id_usu int,
	id_que int,
	data date default CURRENT_DATE
);


create table alertas (
	id_ale serial primary key,
	id_que int,
	mensagem varchar(400),
	imagem varchar(400),
	intervalo int
);

create table usuario_alertas (
	id_uel serial primary key,
	id_usu int,
	id_ale int,
	data date default CURRENT_DATE
);
