<?php
namespace App\Enums;

enum SerieStatusTypes: string {
    case Finished = 'finished';
    case Canceled = 'canceled';
    case Open = 'open';
}