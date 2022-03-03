<table class="table table-condensed table-striped">
    <thead>
      <tr>
        <th>Documento</th>
        <th>Ver</th>
      </tr>
    </thead>
    <tbody>
    @foreach($listadetalledoc as $index => $item)
        <tr>
          <td>{{$item->descripcion}}</td>
          <td>
            <a target="_blank" href="{{ url('/descargar-documento-control/'.Hashids::encode(substr($item->id, -8))) }}" class="tooltipcss opciones">
              Ver
            </a>
          </td>
        </tr>                  
    @endforeach
    </tbody>
</table>