$(document).ready(function(){

    var carpeta = $("#carpeta").val();

    $(".buscarpacientetop").on('click','.buscarpaciente', function() {

        event.preventDefault();
        var dni        =   $('#dni_b').val();
        var idopcion    =   $('#idopcion').val();
        var _token      =   $('#token').val();

        //validacioones
        if(dni ==''){ alerterrorajax("Ingrese un dni."); return false;}

        data            =   {
                                _token      : _token,
                                dni         : dni,
                                idopcion    : idopcion,
                            };
        ajax_normal(data,"/ajax-buscar-paciente-xdni");

    });


    $(".registropaciente").on('click','.buscarpaciente', function() {

        event.preventDefault();
        var dni        =   $('#dni_b').val();
        var idopcion    =   $('#idopcion').val();
        var _token      =   $('#token').val();

        //validacioones
        if(dni ==''){ alerterrorajax("Ingrese un dni."); return false;}

        data            =   {
                                _token      : _token,
                                dni         : dni,
                                idopcion    : idopcion,
                            };
        ajax_normal_form(data,"/ajax-buscar-paciente");

    });


    $(".registropaciente").on('click','.buscarlistaatencion', function() {

        event.preventDefault();
        var fecha        =   $('#fecha').val();
        var idopcion   =   $('#idopcion').val();
        var _token     =   $('#token').val();

        //validacioones
        if(fecha ==''){ alerterrorajax("Ingrese un fecha."); return false;}

        data            =   {
                                _token      : _token,
                                fecha        : fecha,
                                idopcion    : idopcion,
                            };
        ajax_normal(data,"/ajax-buscar-controles-recepcionista-xdia");

    });


    $(".atenderpaciente").on('click','.buscarlistaatender', function() {

        event.preventDefault();
        var fecha        =   $('#fecha').val();
        var idopcion   =   $('#idopcion').val();
        var _token     =   $('#token').val();

        //validacioones
        if(fecha ==''){ alerterrorajax("Ingrese un fecha."); return false;}

        data            =   {
                                _token      : _token,
                                fecha        : fecha,
                                idopcion    : idopcion,
                            };
        ajax_normal(data,"/ajax-buscar-controles-doctor-xdia");

    });


    $(".atenderpaciente").on('dblclick','.dobleclickpc', function(e) {

        var _token                  =   $('#token').val();
        var control_id              =   $(this).attr('data_control_id');
        var idopcion                =   $('#idopcion').val();
        $(this).addClass("pintar_sel");
        $('.dobleclickpc').removeClass("pintar_sel");
        $(this).addClass("pintar_sel");

        data                        =   {
                                            _token                  : _token,
                                            control_id              : control_id,
                                            idopcion                : idopcion
                                        };
        ajax_normal_form(data,"/ajax-buscar-control-historial");

    });

    $(".atenderpaciente").on('click','.asignarcie', function() {

        event.preventDefault();
        var codigocie       =   $('#codigocie').val();
        var descripcion     =   $('#descripcion').val();
        var control_id      =   $('#control_id').val();

        var _token          =   $('#token').val();
        //validacioones
        if(descripcion ==''){ alerterrorajax("Ingrese un diagnostico."); return false;}

        data            =   {
                                _token      : _token,
                                codigocie   : codigocie,
                                descripcion : descripcion,
                                control_id : control_id,
                            };
        ajax_normal_section(data,"/ajax-asignar-cie-control",'listajax_detalle');

        $('#descripcion').val('');
        $('#codigocie').val('');

    });


    $(".atenderpaciente").on('click','.eliminarcie', function() {

        event.preventDefault();
        var detalle_control_id =   $(this).attr('data_detalle_id');
        var control_id      =   $('#control_id').val();
        var _token          =   $('#token').val();

        data            =   {
                                _token      : _token,
                                detalle_control_id   : detalle_control_id,
                                control_id   : control_id,
                            };
        ajax_normal_section(data,"/ajax-eliminar-cie-control",'listajax_detalle');

    });


    $(".atenderpaciente").on('click','.eliminardoc', function() {

        event.preventDefault();
        var detalle_control_id =   $(this).attr('data_detalle_id');
        var control_id      =   $('#control_id').val();
        var _token          =   $('#token').val();

        data            =   {
                                _token      : _token,
                                detalle_control_id   : detalle_control_id,
                                control_id   : control_id,
                            };
        ajax_normal_section(data,"/ajax-eliminar-doc-control",'listajax_detalle_doc');

    });






});
