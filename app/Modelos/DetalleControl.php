<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class DetalleControl extends Model
{
    protected $table = 'detallecontroles';
    public $timestamps=false;

    protected $primaryKey = 'id';
    public $incrementing = false;
    public $keyType = 'string';


}
