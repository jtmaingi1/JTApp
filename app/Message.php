<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    //// Table Name
    protected $table = 'messages';
    // Primary Key
    public $primaryKey = 'id';
    // Timestamps
    public $timestamps = true;

    public function user() {
        return $this->belongsTo('App\user');

    }
}
