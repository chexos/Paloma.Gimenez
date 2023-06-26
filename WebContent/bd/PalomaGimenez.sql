drop database if exists paloma;
create database paloma;
use paloma;
create table usuario(
	cod_usu varchar(10) primary key,
    nom_usu varchar(10) not null unique,
    cla_usu varchar(10) not null
);
insert into usuario values ('usuario001','paloma','ht73g4s6o2');
delimiter $$
create procedure usp_validaAcceso(usr varchar(10), psw varchar(10))
begin
	select * from usuario where nom_usu = usr and cla_usu = psw;
end$$
delimiter ;