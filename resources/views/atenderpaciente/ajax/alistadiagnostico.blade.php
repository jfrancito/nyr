<table class="table table-condensed table-striped">
    <thead>
      <tr>
        <th>CIE 10</th>
        <th>DIAGNOSTICO</th>
        <th>X</th>
      </tr>
    </thead>
    <tbody>
    @foreach($listadetallecie as $index => $item)
        <tr>
          <td>{{$item->codigocie}}</td>
          <td>{{$item->descripcion}}</td>
          <td>
            <a href="#" class="tooltipcss opciones eliminarcie" data_detalle_id = "{{$item->id}}">
                <span class="icon mdi mdi-delete" style="color: #eb6357;font-size: 1.3em"></span>
            </a>
          </td>
        </tr>                  
    @endforeach
    </tbody>
</table>