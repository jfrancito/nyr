<table id="nso" class="table table-striped table-borderless table-hover td-color-borde td-padding-7">
  <thead>
    <tr>
      <th>Turno</th>
      <th>Paciente</th>
      <th>Doctor</th>
    </tr>
  </thead>
  <tbody>
    @foreach($listacontroles as $index=>$item)
      <tr class="@if($item->ind_atendido == 1) online @endif">
        <td class='center'>{{$index + 1}}</td>
        <td>{{$item->paciente->apellido_paterno}} {{$item->paciente->apellido_materno}} {{$item->paciente->nombres}}</td>
        <td>{{$item->user->nombre}}</td>
        
      </tr>                    
    @endforeach
  </tbody>
</table>

@if(isset($ajax))
  <script type="text/javascript">
    $(document).ready(function(){
       App.dataTables();
    });
  </script> 
@endif